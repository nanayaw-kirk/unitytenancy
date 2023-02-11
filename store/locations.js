import Vue from "vue"
import UIkit from 'uikit'
export const state = () =>	({
	locations : [],
	connected: false,
	message: null,
	error: null,
	socket : null,
	loading : true,
	dataFilters : {},
	search : ""
})

export const getters = {
	data(state){

		if (state.search && state.search.length > 0) {
			return state.locations.filter(item => {
				return item.region.toLowerCase().includes(state.search.toLowerCase()) || item.location_id.toLowerCase().includes(state.search.toLowerCase()) || (item.team && item.team.name !== undefined ? item.team.name.toLowerCase().includes(state.search.toLowerCase()) : '')
			})
		}
		
		else if (Object.keys(state.dataFilters).length > 0) {
			let locations = state.locations
			locations = locations.filter(function(item) {
				for (var key in state.dataFilters) {
					if (item[key] === undefined || item[key] != state.dataFilters[key])
						return false
				}
				return true
			})

			return locations
		}

		return state.locations
	},
	loading(state){
		return state.loading
	},
	dataFilters(state){
		return state.dataFilters
	},

	search(state){
		return state.search
	}
}

export const mutations = {
	setConnected(state, value) {
		state.connected = value
	},
	setData(state, payload) {
		state.locations = payload
	},
	setError(state, value) {
		state.error = value
	},

	patch(state, payload){
		let pin = state.locations.indexOf(state.locations.find((item, index)=> item.id === payload.id))
		if (pin) {
			Vue.set(state.locations, pin , payload)
		}

	},

	setSocket(state, socket) {
		state.socket = socket
	},

	setState(state, value){
		state.loading = value
	},

	APPLY_FILTER(state, payload){
		Vue.set(state.dataFilters, payload.key, payload.value)
	},

	REMOVE_FILTER(state,key){
		Vue.delete(state.dataFilters, key)
	},

	SET_SEARCH(state,payload){
		state.search = payload
	}
}

export const actions = {
	setData({commit}, payload){
		commit('setData', payload)
	},

	patch({commit}, payload){
		commit('patch', payload)
	},

	connect({ commit }) {
		commit('setState', true)
		const socket = new WebSocket(`${this.$config.WS}/location/?token=${this.$auth.strategy.token.get().slice(6)}`)
		socket.onopen = () => {
			commit('setConnected', true)
			commit('setSocket', socket)
		}

		socket.onmessage =  (event) => {

			let payload = JSON.parse(event.data)
			
			if(payload.is_alert){
				commit('patch', payload.message)
				commit('notifications/SET_NOTIFS', {from : 'site', ...payload} , {root : true})
			}

			else{
				commit('setData', payload.message)
			}


			commit('setState', false)
		}

		socket.onerror = (event) => {
			commit('setError', event)
			commit('setState', false)
		}

		socket.onclose = (event) => {
			commit('setSocket', null)
			commit('setState', false)
		}
	},

	applyFilter({commit}, payload){
		payload.add ? commit('APPLY_FILTER', payload) : commit('REMOVE_FILTER', payload.key)
	},

	applySearch({commit}, payload){
		commit('SET_SEARCH', payload)
	},
	clearSearch({commit}){
		commit('SET_SEARCH', '')
	}
}



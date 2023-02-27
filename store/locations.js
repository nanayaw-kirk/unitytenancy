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
	
	setData(state, payload) {
		state.locations = payload
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

	async getData({commit}){
		commit('setState', true)
		await this.$axios.$get(`/netmap/location`)
		.then(res=>{
			commit('setData', res)
		})
		.catch(err => {
			console.log(err)
		})
		.finally(()=>{
			commit('setState', false)
		})
	},

	async searchLocations({commit}, query){
		commit('setState', true)
		await this.$axios.$get(`/netmap/location?${query}`)
		.then(res=>{
			commit('setData', res)
		})
		.catch(err => {
			console.log(err)
		})
		.finally(()=>{
			commit('setState', false)
		})
	},
}



export const state = () =>	({
	connected: false,
	message: null,
	error: null,
	socket : null,
	loading : true,
	summary : undefined,
	center : {lat: 7.996413168234754, lng: -1.2089393787394378}

})

export const getters = {
	summary(state){
		return state.summary ? Object.fromEntries(Object.entries(state.summary).filter(([key]) => !key.includes('country'))) : {}
	},
	center(state){
		return state.center
	}

}

export const mutations = {

	setConnected(state, value) {
		state.connected = value
	},
	setData(state, payload) {
		state.summary = payload
	},
	setError(state, value) {
		state.error = value
	},

	setSocket(state, socket) {
		state.socket = socket
	},

	setState(state, value){
		state.loading = value
	},


	SET_CENTER(state,payload){
		state.center = payload
	}

}

export const actions = {
	async getSummary({commit}){
		await this.$axios.$get(`/netmap/location-summary`)
		.then(res=>{
			if (res.country && res.country.center) {
				commit('SET_CENTER', {lat : res.country.center.lat, lng:res.country.center.lon})
			}
		})
		.catch(err=>{
			return Promise.reject(err)
		})
	},

	connect({ commit }) {
		commit('setState', true)
		const socket = new WebSocket(`${this.$config.WS}/summary/?token=${this.$auth.strategy.token.get().slice(6)}`)
		socket.onopen = () => {
			commit('setConnected', true)
			commit('setSocket', socket)
		}
		socket.onmessage =  (event) => {

			let payload = JSON.parse(event.data)
			
			commit('setData', payload.message)
			commit('setState', false)
		}

		socket.onerror = (event) => {
			commit('setError', event)
		}

		socket.onclose = (event) => {
			console.log('Socket Closed')
			commit('setSocket', null)
		}
	},
	
}
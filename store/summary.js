export const state = () =>	({
	center : {lat: 7.996413168234754, lng: -1.2089393787394378}
})

export const getters = {
	center(state){
		return state.center
	}

}

export const mutations = {
	
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
			// return Promise.reject(err)
		})
	}
	
}
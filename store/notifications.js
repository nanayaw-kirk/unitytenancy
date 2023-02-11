import Vue from "vue"
export const state = () =>	({

	notifications : []

})

export const getters = {

	notifications(state){
		return state.notifications
	},

	count(state){
		return state.notifications.length
	},

	siteNotifications(state){
		return state.notifications.filter(item => {
			return item.from === 'site'
		})
	},

	vehicleNotifications(state){
		return state.notifications.filter(item => {
			return item.from !== 'site'
		})
	}

}

export const mutations = {
	SET_NOTIFS(state, payload){
		Vue.set(state.notifications, state.notifications.length ? state.notifications.length : 0, payload)
	},

	CLEAR_ALL(state){
		state.notifications = []
	}
}

export const actions = {

	clearAll({commit}){
		commit('CLEAR_ALL')
	}

}



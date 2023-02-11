export const state = () =>	({

})

export const getters = {
	authenticated (state){
		return state.auth.loggedIn
	},

	user (state){
		return state.auth.user
	}
}

export const actions = {

}


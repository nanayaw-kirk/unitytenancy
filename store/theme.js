export const state = () =>	({
	theme : ''
})

export const getters = {
	theme(state){
		return state.theme
	}
}

export const mutations = {
	TOOGLE_THEME(state, payload){
		state.theme = state.theme === 'uk-dark' ? 'uk-light' : 'uk-dark'
	}
}

export const actions = {
	setTheme({commit}, payload){
		commit('TOOGLE_THEME')
	}
}

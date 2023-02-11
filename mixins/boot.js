export default {
	data(){
		return {
			loaded : false
		}
	},

	mounted(){
		if (!this.colorMode) {
			this.toggleTheme()
		}
		this.loaded = true
	}
}
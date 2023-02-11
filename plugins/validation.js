import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'

const Validation = {
	install (Vue, options){
		Vue.mixin({
			computed: {
				...mapGetters({
					errors : 'validation/errors',
					colorMode : 'theme/theme'
				})
			},

			methods : {
				...mapActions({
					cleanup : 'validation/clearErrors',
					toggleTheme : 'theme/setTheme'
				})
			}
		})
	}
}

Vue.use(Validation)
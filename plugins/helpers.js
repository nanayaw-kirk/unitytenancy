import Vue from 'vue'
import {mapGetters,mapActions} from 'vuex'

const Helpers = {
	install (Vue, options){
		Vue.mixin({
			computed: {
				...mapGetters({
					locationFilters : 'locations/dataFilters',
					notifications : 'notifications/notifications',
					notifCount : 'notifications/count',
					siteNotifications : 'notifications/siteNotifications',
				})
			},

			methods : {
				...mapActions({
					clearNotifs : 'notifications/clearAll'
				}),

				hasFilter(key){
					return Object.keys(this.locationFilters).includes(key)
				},
			}

		})
	}
}

Vue.use(Helpers)
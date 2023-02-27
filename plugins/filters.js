import Vue from 'vue'
import Vue2Filters from 'vue2-filters'


let Vue2FiltersConfig = {
	// currency : {
	// 	symbol: 'GHS',
	// 	spaceBetweenAmountAndSymbol: true,
	// },
	pluralize: {
		includeNumber: true
	}
}
Vue.filter('clean', function(text){
	return text.split('-').join(' ').split('_').join(' ').split('-').join(' ')
})

Vue.use(Vue2Filters, Vue2FiltersConfig)
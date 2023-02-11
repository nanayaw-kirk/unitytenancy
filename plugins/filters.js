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
Vue.filter('planize', function(text){
	if (text.toLowerCase().includes('plan')) {
		return text
	}
	return `${text} Plan`
})

Vue.use(Vue2Filters, Vue2FiltersConfig)
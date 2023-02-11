<template>
	<div>
		<a class="filter-chip uk-flex uk-flex-middle" href="#" :class="colorMode === 'uk-light' ? '' : 'bordered'">
			<span class="icon-power ic-mid"></span>
			<span class="filter-chip-text tiny-margin-left tiny-margin-right">Power Source Filter</span>
			<span class="icon-down"></span>
		</a>

		<div uk-drop="mode:click; offset: 15">
			<div class="background uk-border-rounded uk-box-shadow-large">
				<div class="uk-width-1-1 uk-flex uk-flex-column">
					<div class="tiny-padding">
						<small>
							Filter Sites by Power Source
						</small>
					</div>

					<template v-for="source in ['mains', 'battery' , 'genset', 'solar']">
						<div class="tiny-padding uk-flex uk-flex-middle border-top click primary-on-hover" @click="active = source" :key="source">
							<div class="uk-h3 uk-margin-remove-vertical uk-margin-small-right" :class="`icon-${source}`"></div>
							<div class="uk-width-expand uk-flex uk-flex-middle">
								<span class="uk-text-small uk-text-capitalize">
									Show Sites On {{source}} 
								</span>
							</div>

							<div class="square-20 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-circle">
								<span class="icon-check" v-if="active === source"></span>
							</div>
						</div>
					</template>





					<div class="tiny-padding uk-flex uk-flex-top border-top" v-if="hasFilter('power_source') || active !== null">
						<button class="uk-button uk-button-small uk-background-danger-op uk-margin-small-right" @click="active = null; applyFilter()" v-if="hasFilter('power_source')">
							Clear Filters
						</button>

						<button class="uk-button uk-button-small uk-button-primary" @click="applyFilter" v-if="active !== null" :disabled="hasFilter('power_source') && locationFilters.power_source === active">
							Apply Filters
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
export default {
	data(){
		return {
			active : null
		}
	},

	methods : {
		applyFilter(){
			let payload = {
				key : 'power_source',
				value : this.active,
				add : this.active === null ? false : true 
			}

			this.$store.dispatch('locations/applyFilter', payload)
		}
	},

	mounted(){
		if (this.hasFilter('power_source')) {
			this.active = this.locationFilters.power_source
		}
	}
}
</script>

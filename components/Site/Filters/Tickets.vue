<template>
	<div>
		<a class="filter-chip uk-flex uk-flex-middle" href="#" :class="colorMode === 'uk-light' ? '' : 'bordered'">
			<span class="icon-ticket ic-mid"></span>
			<span class="filter-chip-text tiny-margin-left tiny-margin-right">Tickets Filter</span>
			<span class="icon-down"></span>
		</a>

		<div uk-drop="mode:click; offset: 15">
			<div class="background uk-border-rounded uk-box-shadow-large">
				<div class="uk-width-1-1 uk-flex uk-flex-column">
					<div class="tiny-padding">
						<small>
							Filter Sites by Trouble Tickets
						</small>
					</div>

					<div class="tiny-padding uk-flex uk-flex-top border-top click primary-on-hover" @click="active = true">
						<div class="icon-trouble-ticket uk-h2 uk-margin-remove-vertical uk-margin-small-right uk-text-danger"></div>
						<div class="uk-width-expand uk-flex uk-flex-column">

							<span class="uk-text-bold uk-text-small">
								Sites With  Tickets
							</span>
							<small>
								Show sites with active tickets.
							</small>
						</div>

						<div class="square-20 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-circle">
							<span class="icon-check" v-if="active === true"></span>
						</div>
					</div>

					<div class="tiny-padding uk-flex uk-flex-top border-top click primary-on-hover" @click="active = false">
						<div class="icon-no-trouble-ticket uk-h2 uk-margin-remove-vertical uk-margin-small-right uk-text-success"></div>
						<div class="uk-width-expand uk-flex uk-flex-column">

							<span class="uk-text-bold uk-text-small">
								Sites With No Tickets
							</span>
							<small>
								Show sites with no active tickets.
							</small>
						</div>

						<div class="square-20 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-circle">
							<span class="icon-check" v-if="active === false"></span>
						</div>
					</div>

					<div class="tiny-padding uk-flex uk-flex-top border-top" v-if="hasFilter('has_tt') || active !== null">
						<button class="uk-button uk-button-small uk-background-danger-op uk-margin-small-right" @click="active = null; applyFilter()" v-if="hasFilter('has_tt')">
							Clear Filters
						</button>

						<button class="uk-button uk-button-small uk-button-primary" @click="applyFilter" v-if="active !== null" :disabled="hasFilter('has_tt') && locationFilters.has_tt === active">
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
				key : 'has_tt',
				value : this.active,
				add : this.active === null ? false : true 
			}

			this.$store.dispatch('locations/applyFilter', payload)
		}
	},

	mounted(){
		if (this.hasFilter('has_tt')) {
			this.active = this.locationFilters.has_tt
		}
	}
}
</script>

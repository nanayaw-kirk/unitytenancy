<template>
	<div>
		<div class="tiny-padding border-bottom uk-flex uk-flex-middle">
			<div class="uk-width-expand  tiny-margin-right  tiny-padding uk-padding-remove-vertical uk-padding-remove-horizontal">
				<div class="uk-width-1-1 uk-inline">
					<!-- <input type="text" v-model="searchTerm" class="uk-input" placeholder="Search for towers & vehicles" @keyup.enter="filterSearch"> -->

					<gmap-autocomplete class="uk-input" placeholder="Enter Location to Search Sites"></gmap-autocomplete>

					<div class="uk-flex uk-flex-middle uk-position-center-right uk-position-z-index uk-button-danger uk-border-rounded uk-margin-small-right click" style="padding: 1px 8px" @click="searchTerm = ''; clearSearch()" v-if="searchTerm && searchTerm.length > 1">
						<small><small class="uk-text-white">Clear</small></small>
					</div>
				</div>
			</div>


			<div class="uk-margin-small-right uk-margin-small-left click toggler uk-margin-auto-vertical uk-flex uk-flex-column uk-flex-center uk-flex-middle square-30 bordered uk-border-rounded" @click="$uikit.drop($refs.dropkit).show()">
				<span class="icon-down uk-h2 uk-margin-remove"></span>
			</div>
			

			<div class="square-35 uk-border-circle uk-flex uk-flex-column uk-flex-middle uk-flex-center" :class="searchTerm && searchTerm.length > 1 && (vehicles || sites) ? 'uk-button-primary click' : 'background disabled'" @click="searchTerm && searchTerm.length > 1 && (vehicles || sites) ? filterSearch() : ''">
				<span class="icon-search uk-text-large uk-text-color"></span>
			</div>

			



			<div uk-drop="mode:click; offset: 20; pos:bottom-right; toggle : .toggler" ref="dropkit">
				<div class="background uk-border-rounded uk-box-shadow-xlarge bordered">
					<div class="uk-width-1-1 uk-flex uk-flex-column">
						<div class="tiny-padding uk-flex uk-flex-top click primary-on-hover" @click="sites = !sites">
							<div class="icon-tower uk-h3 uk-margin-remove-vertical uk-margin-small-right"></div>
							<div class="uk-width-expand uk-flex uk-flex-column">
								<span class="uk-text-bold uk-text-small">
									{{sites ? 'Exclude' :  'Include' }} Sites
								</span>
								<small>
									{{sites ? 'Uncheck to exclude sites' :  'Check to include sites' }}
								</small>
							</div>

							<div class="square-25 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-rounded">
								<span class="icon-check" v-if="sites"></span>
							</div>
						</div>
					</div>

					<div class="uk-width-1-1 uk-flex uk-flex-column border-top">
						<div class="tiny-padding uk-flex uk-flex-top click primary-on-hover" @click="vehicles = !vehicles">
							<div class="icon-vehicle uk-h3 uk-margin-remove-vertical uk-margin-small-right"></div>
							<div class="uk-width-expand uk-flex uk-flex-column">

								<span class="uk-text-bold uk-text-small">
									{{vehicles ? 'Exclude' :  'Include' }} Vehicles
								</span>
								<small>
									{{vehicles ? 'Uncheck to exclude vehicles' :  'Check to include vehicles' }}
								</small>
							</div>

							<div class="square-25 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-rounded">
								<span class="icon-check" v-if="vehicles"></span>
							</div>
						</div>
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
			searchTerm : '',
			vehicles : true,
			sites : true
		}
	},

	methods : {
		async filterSearch(){
			if (this.sites && this.searchTerm.length > 1) {
				await this.$store.dispatch('locations/applySearch', this.searchTerm)
			}

			if (this.vehicles && this.searchTerm.length > 1) {
				await this.$store.dispatch('vehicles/applySearch', this.searchTerm)
			}
		},

		async clearSearch(){
			await this.$store.dispatch('locations/clearSearch')
			await this.$store.dispatch('vehicles/clearSearch')
		}
	},

	watch : {
		searchTerm(nu,old){
			if (old.length > 0 && nu.length < 1) {
				this.clearSearch()
			}
		}
	},

	mounted(){
		this.searchTerm = this.$store.getters['locations/search'] ? this.$store.getters['locations/search'] : this.$store.getters['vehicles/search']
	}
}
</script>

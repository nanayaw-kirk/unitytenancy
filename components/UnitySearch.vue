<template>
	<div>
		<div class="tiny-padding border-bottom uk-flex uk-flex-middle">
			<div class="uk-width-expand uk-flex uk-flex-column  tiny-padding uk-padding-remove-vertical uk-padding-remove-horizontal">
				<div class="uk-width-1-1 uk-inline">
					<!-- <input type="text" v-model="searchTerm" class="uk-input" placeholder="Search for towers & vehicles" @keyup.enter="searchSites"> -->

					<gmap-autocomplete :key="autoCompleteKey" @place_changed="handlePlaceChange" class="uk-input" placeholder="Enter Location to Search Sites"></gmap-autocomplete>

					<div class="uk-flex uk-flex-middle uk-position-center-right uk-position-z-index uk-button-danger uk-border-rounded uk-margin-small-right click" style="padding: 1px 8px" @click="place = undefined; clearSearch()" v-if="(place && place.lon  && place.lat)">
						<small><small class="uk-text-white">Clear</small></small>
					</div>
				</div>
			</div>



<!-- 			

			<div class="square-35 uk-border-circle uk-flex uk-flex-column uk-flex-middle uk-flex-center" :class="(place && place.lon  && place.lat)? 'uk-button-primary click' : 'background disabled'" @click="(place && place.lon  && place.lat) ? searchSites() : ''">
				<span class="icon-search uk-text-large uk-text-color"></span>
			</div> -->
		</div>
		<div class="uk-flex uk-flex-middle tiny-padding">
			<small class="uk-margin-auto-right">
				Modify Search Radius
			</small>
			<input type="number" class="uk-input uk-text-center" style="max-width:100px" placeholder="Radius" v-model="radius">
		</div>

		<div class="uk-flex uk-flex-middle tiny-padding border-top">
			<button class="uk-button uk-button-primary uk-width-medium uk-margin-auto" :disabled="searching || !place"  @click="(place && place.lon  && place.lat) ? searchSites() : ''" :class="searching ? 'loading' : ''">
				Search
			</button>
		</div>


		
	</div>	
</template>
<script>
export default {
	data(){
		return {
			searchTerm : '',
			vehicles : true,
			sites : true,
			place : undefined,
			autoCompleteKey : false,
			radius : 20,
			searching : false
		}
	},

	methods : {
		async searchSites(){
			this.searching = true
			await this.$store.dispatch('locations/searchLocations', `lat=${this.place.lat}&lon=${this.place.lon}&radius=${this.radius}`)
			.finally(()=>{
				this.searching = false
			})
		},

		async clearSearch(){
			await this.$store.dispatch('locations/getData')
			this.autoCompleteKey = !this.autoCompleteKey
		},

		handlePlaceChange(event){
			let place = {}
			place.lon = event.geometry.location.lng()
			place.lat = event.geometry.location.lat()
			console.log(place)
			this.place = place
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

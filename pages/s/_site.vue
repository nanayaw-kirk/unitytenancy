<template>
	<div class="uk-width-1-1 uk-inline site-detail">

		<div class="uk-flex uk-flex-row-reverse content-height">
			<div class="uk-width-expand uk-border-rounded background uk-box-shadow-xlarge content-height uk-flex uk-flex-column">
				<div class="uk-width-1-1 border-bottom border-top tiny-padding uk-padding-remove-vertical" uk-slider>
					<div class="uk-slider-items nav-items">
						<a  @click.prevent="visible = 'DETAILS'" :class="visible === 'DETAILS' ? 'active' : ''">
							<span>Details</span>
						</a>
						
						<a  @click.prevent="visible = 'TICKET'" :class="visible === 'TICKET' ? 'active' : ''">
							<span>Trouble Ticket</span>
						</a>
						<a  @click.prevent="visible = 'VEHICLES'" :class="visible === 'VEHICLES' ? 'active' : ''">
							<span>Nearby Vehicles</span>
						</a>
						<a  @click.prevent="visible = 'ALARMS'" :class="visible === 'ALARMS' ? 'active' : ''">
							<span>Alarms</span>
						</a>
						<a  @click.prevent="visible = 'PM'" :class="visible === 'PM' ? 'active' : ''">
							<span>PM</span>
						</a>
						<a  @click.prevent="visible = 'FUELING'" :class="visible === 'FUELING' ? 'active' : ''">
							<span>Fueling</span>
						</a>
						<a  @click.prevent="visible = 'TEAM'" :class="visible === 'TEAM' ? 'active' : ''">
							<span>Teams</span>
						</a>
					</div>
				</div>
				<div class="uk-overflow-auto  uk-margin-auto-vertical uk-margin-remove-top content-height">
					<template v-if="visible === 'DETAILS'">


						<div v-if="weather">
							<div class="border-top border-bottom tiny-padding uk-flex uk-flex-column">
								<div class="uk-flex uk-flex-middle">
									<span class="icon-weather uk-h3 uk-margin-remove-vertical uk-margin-small-right"></span>
									<span class="uk-text-small uk-text-bold">
										Weather Information
									</span>
								</div>
							</div>
							<div class="tiny-padding">
								<weather :weather="weather"/>	
							</div>
						</div>

						<div v-if="site.power && Object.keys(site.power).length > 0">
							<div class="border-top border-bottom tiny-padding">
								Power
							</div>
							<site-power class="tiny-padding" :power="site.power"></site-power>
						</div>

						{{site}}
					</template>
					<!-- <template v-else-if="visible === 'POWER'">
						{{site.power}}
					</template> -->
					<template v-else-if="visible === 'TICKET'">
						{{site.nearby_vehicles}}
					</template>
					<template v-else-if="visible === 'VEHICLES'">
						{{site.nearby_vehicles}}
					</template>
					<template v-else-if="visible === 'ALARMS'">
						<iframe v-if="site.alarms && site.alarms.iframe_url" class="uk-width-1-1 uk-height-1-1" :src="site.alarms.iframe_url" frameborder="0"></iframe>
					</template>
					<template v-else-if="visible === 'PM'">
						<iframe v-if="site.pm && site.pm.iframe_url" class="uk-width-1-1 uk-height-1-1" :src="site.pm.iframe_url" frameborder="0"></iframe>
					</template>
					<template v-else-if="visible === 'FUELING'">
						Fueling 
					</template>

					<template v-else>
						TEAM
					</template>
				</div>
			</div>


			<div class="uk-width-2-5">
				<gmap-map ref="mainMap" v-bind="controls" class="uk-width-1-1 content-height">
					<site-marker :site="site"/>

					<template v-if="site.nearby_vehicles && site.nearby_vehicles.length > 0">
						<vehicle-marker v-for="(vehicle, key) in site.nearby_vehicles" :vehicle="vehicle" :key="key"/>
					</template>
				</gmap-map>
			</div>
		</div>




	</div>
</template>

<script>

export default {
	async asyncData({params, error, $axios}){
		let site

		await $axios.$get(`/netmap/location/${params.site}/details`)
		.then(res => {
			site = res
		})
		.catch(err=>{
			error({statusCode : 404, message : 'The Page you are looking for could not be found'})
		})

		return {site}

	},

	data(){
		return {
			visible : 'DETAILS',
			weather : undefined
		}
	},
	computed : {
		controls(){
			return {
				center : {
					lat: this.site.lat,
					lng: this.site.lon,
				},
				zoom: 12,
				zoomControl : false,
			}
		}
	},

	methods : {
		async getWeather(){
			await this.$axios.$get(`/netmap/weather-info?lat=${this.site.lat}&lon=${this.site.lon}`)
			.then(res => {
				this.weather = res
			})
			.catch((err)=>{})
		}
	},


	async mounted(){
		await this.getWeather()
	}
}
</script>


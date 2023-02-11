<template>
	<div class="uk-flex uk-flex-column">
		<div class="tiny-padding uk-border-rounded background" v-if="show && $store.getters['summary/summary'] && Object.keys($store.getters['summary/summary']).length > 0">
			<div class="uk-flex uk-flex-column">
				

				<div class="tiny-padding uk-flex uk-flex-middle uk-background-danger uk-width-1-1 uk-border-rounded tiny-margin-bottom uk-text-white">
					<span class="uk-margin-small-right icon-ticket ic-mid"></span>
					<span class="uk-text-small uk-width-expand uk-margin-small-right">
						Sites With Critical Alarms
					</span>
					<span class="uk-text-bold uk-h4 uk-margin-remove-vertical">
						{{$store.getters['summary/summary'].location && $store.getters['summary/summary'].location.crital_alarm_locations ? $store.getters['summary/summary'].location.crital_alarm_locations  : 0 | number('0,0')}}
					</span>
				</div>
				<div class="tiny-padding uk-flex uk-flex-middle major-alarm-sites uk-width-1-1 uk-border-rounded tiny-margin-bottom uk-text-white">
					<span class="uk-margin-small-right icon-major-alarm ic-mid"></span>
					<span class="uk-text-small uk-width-expand uk-margin-small-right">
						Sites With Major Alarms
					</span>
					<span class="uk-text-bold uk-h4 uk-margin-remove-vertical">
						{{$store.getters['summary/summary'].location && $store.getters['summary/summary'].location.major_alarm_locations ? $store.getters['summary/summary'].location.major_alarm_locations  : 0 | number('0,0')}}
					</span>
				</div>
				<div class="tiny-padding uk-flex uk-flex-middle trouble-ticket-sites uk-width-1-1 uk-border-rounded tiny-margin-bottom uk-text-white">
					<span class="uk-margin-small-right icon-critical-alarm ic-mid"></span>
					<span class="uk-text-small uk-width-expand uk-margin-small-right">
						Sites With Trouble Tickets
					</span>
					<span class="uk-text-bold uk-h4 uk-margin-remove-vertical">
						{{$store.getters['summary/summary'].location && $store.getters['summary/summary'].location.locations_with_tt ? $store.getters['summary/summary'].location.locations_with_tt  : 0 | number('0,0')}}
					</span>
				</div>


				<template v-if="$store.getters['summary/summary'].location && $store.getters['summary/summary'].location.total_locations">

					<div class="uk-width-1-1 border-bottom uk-margin-small-top uk-margin-small-bottom"></div>

					<div class="uk-width-1-1 uk-flex" >
						<div class="uk-flex uk-flex-column uk-width-expand" >

							<div class="uk-flex  grid-padding uk-padding-remove-horizontal" v-for="(source, key) in powerSources" :key="key">
								<div class="uk-icon-button uk-background-primary-op tiny-margin-right">
									<span :class="`icon-${key}`" class="ic-large"></span>
								</div>
								<div class="uk-width-expand uk-flex uk-flex-column uk-margin-small-right uk-margin-auto-vertical uk-margin-remove-bottom">
									<div class="uk-width-1-1 uk-flex uk-border-rounded" style="background:#dcdcdc">
										<div class="uk-background-primary uk-border-rounded" :style="`width:${(source / $store.getters['summary/summary'].location.total_locations) *100}px; height: 8px`">
										</div>
									</div>
									<small>
										<small class="uk-text-bold">
											{{key | capitalize}}  - 
											({{(source / $store.getters['summary/summary'].location.total_locations) | percent}})
										</small>
									</small>
								</div>
								<div class="uk-width-1-6">
									<small>
										{{source | number('0,0') }}
									</small>
								</div>
							</div>
						</div>

						<div class="uk-width-1-5 tiny-padding uk-flex uk-flex-column uk-flex-middle uk-flex-center border-left">
							<h4 class="tiny-margin-bottom uk-margin-remove-top uk-text-bold uk-text-center">
								{{$store.getters['summary/summary'].location.total_locations | number('0,0')}}
							</h4>
							<small class="uk-text-center">
								Sites
							</small>
						</div>
					</div>

				</template>


				<template v-if="$store.getters['summary/summary'].vehicle && $store.getters['summary/summary'].vehicle.total_vehicles">

					<div class="uk-width-1-1 border-bottom uk-margin-small-top uk-margin-small-bottom"></div>

					<div class="uk-width-1-1 uk-flex" >
						<div class="uk-flex uk-flex-column uk-width-expand" >

							<div class="uk-flex  grid-padding uk-padding-remove-horizontal" v-for="(vehicle, key) in vehicles" :key="key">
								<div class="uk-icon-button uk-background-primary-op tiny-margin-right">
									<span :class="`icon-${key.split('_').join('-')}`" class="ic-large"></span>
								</div>
								<div class="uk-width-expand uk-flex uk-flex-column uk-margin-small-right uk-margin-auto-vertical uk-margin-remove-bottom">
									<div class="uk-width-1-1 uk-flex uk-border-rounded" style="background:#dcdcdc">
										<div class="uk-background-primary uk-border-rounded" :style="`width:${(vehicle / $store.getters['summary/summary'].vehicle.total_vehicles) *100}px; height: 8px`">
										</div>
									</div>
									<small>
										<small class="uk-text-bold">
											{{key.split('_').join(' ') | capitalize}} - 

											({{(vehicle / $store.getters['summary/summary'].vehicle.total_vehicles) | percent}})
										</small>
									</small>
								</div>
								<div class="uk-width-1-6">
									<small>								
										{{vehicle | number('0,0') }}
									</small>
								</div>
							</div>
						</div>

						<div class="uk-width-1-5 tiny-padding uk-flex uk-flex-column uk-flex-middle uk-flex-center border-left">
							<h4 class="tiny-margin-bottom uk-margin-remove-top uk-text-bold uk-text-center">
								{{$store.getters['summary/summary'].vehicle.total_vehicles | number('0,0')}}
							</h4>
							<small class="uk-text-center">
								Vehicles
							</small>
						</div>
					</div>

				</template>


			</div>
		</div>

		<div class="background uk-width-auto uk-margin-auto-right chip  uk-border-rounded click" @click="show = !show">
			<small>
				{{show ? 'Hide Stats' : 'Show Stats'}}
			</small>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			show : true
		}
	},

	computed : {
		powerSources(){
			if(this.$store.getters['summary/summary'].location){
				return {
					mains : this.$store.getters['summary/summary'].location.mains_locations ? this.$store.getters['summary/summary'].location.mains_locations : 0,
					battery : this.$store.getters['summary/summary'].location.battery_locations ? this.$store.getters['summary/summary'].location.battery_locations : 0,
					genset : this.$store.getters['summary/summary'].location.genset_locations ? this.$store.getters['summary/summary'].location.genset_locations : 0,
					solar : this.$store.getters['summary/summary'].location.solar_locations ? this.$store.getters['summary/summary'].location.solar_locations : 0
				}
			}
			return {
				mains : 0,
				battery : 0,
				genset : 0,
				solar : 0
			}
		},

		vehicles(){
			if(this.$store.getters['summary/summary'].vehicle){
				return {
					active_vehicles : this.$store.getters['summary/summary'].vehicle.active_vehicles ? this.$store.getters['summary/summary'].vehicle.active_vehicles : 0,
					ignition_on : this.$store.getters['summary/summary'].vehicle.ignition_on ? this.$store.getters['summary/summary'].vehicle.ignition_on : 0,

					ignition_off : this.$store.getters['summary/summary'].vehicle.ignition_off ? this.$store.getters['summary/summary'].vehicle.ignition_off : 0,
				}
			}
			return {
				active_vehicles : 0,
				ignition_on : 0,
				ignition_off : 0
			}
		}
	}
}
</script>

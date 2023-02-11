<template>
	<div>
		<a class="filter-chip uk-flex uk-flex-middle" href="#" :class="colorMode === 'uk-light' ? '' : 'bordered'">
			<span class="icon-critical-alarm-filled ic-mid"></span>
			<span class="filter-chip-text tiny-margin-left tiny-margin-right">Alarms Filter</span>
			<span class="icon-down"></span>
		</a>

		<div uk-drop="mode:click; offset: 15">
			<div class="background uk-border-rounded uk-box-shadow-large">
				<div class="uk-width-1-1 uk-flex uk-flex-column">
					<div class="tiny-padding">
						<small>
							Filter Sites by Alarm Types
						</small>
					</div>

					<div class="tiny-padding uk-flex uk-flex-top border-top click primary-on-hover" @click="critical_alarm = !critical_alarm">
						<div class="icon-critical-alarm uk-h2 uk-margin-remove-vertical uk-margin-small-right uk-text-danger"></div>
						<div class="uk-width-expand uk-flex uk-flex-column">

							<span class="uk-text-bold uk-text-small">
								Sites with Critical Alarms
							</span>
							<small>
								Show sites with critical alarms.
							</small>
						</div>

						<div class="square-20 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-circle">
							<span class="icon-check" v-if="critical_alarm"></span>
						</div>
					</div>

					<div class="tiny-padding uk-flex uk-flex-top border-top click primary-on-hover" @click="major_alarm = !major_alarm">
						<div class="icon-major-alarm uk-h2 uk-margin-remove-vertical uk-margin-small-right uk-text-amber"></div>
						<div class="uk-width-expand uk-flex uk-flex-column">

							<span class="uk-text-bold uk-text-small">
								Sites With Major Alarms
							</span>
							<small>
								Show sites with major alarms.
							</small>
						</div>

						<div class="square-20 uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-margin-small-left bordered uk-border-circle">
							<span class="icon-check" v-if="major_alarm"></span>
						</div>
					</div>

					<div class="tiny-padding uk-flex uk-flex-top border-top">
						<button class="uk-button uk-button-small uk-background-danger-op uk-margin-small-right" @click="major_alarm = false; critical_alarm = false; applyFilter()" v-if="hasFilter('critical_alarm') || hasFilter('major_alarm')">
							Clear Filters
						</button>

						<button class="uk-button uk-button-small uk-button-primary" @click="applyFilter" :disabled="(hasFilter('critical_alarm') && locationFilters.critical_alarm === critical_alarm) && (hasFilter('major_alarm') && locationFilters.major_alarm === major_alarm)">
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
			critical_alarm : null,
			major_alarm : null,
		}
	},

	methods : {
		async applyFilter(){
			let critical_alarm_payload = {
				key : 'critical_alarm',
				value : this.critical_alarm,
				add : this.critical_alarm 
			}

			await this.$store.dispatch('locations/applyFilter', critical_alarm_payload)

			let major_alarm_payload = {
				key : 'major_alarm',
				value : this.major_alarm,
				add : this.major_alarm 
			}

			await this.$store.dispatch('locations/applyFilter', major_alarm_payload)
			
		}
	},

	mounted(){
		if (this.hasFilter('critical_alarm')) {
			this.critical_alarm = this.locationFilters.critical_alarm
		}

		if (this.hasFilter('major_alarm')) {
			this.major_alarm = this.locationFilters.major_alarm
		}
	}
}
</script>

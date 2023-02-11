<template>
	<div class="uk-width-1-1 uk-flex uk-flex-column">
		<small v-if="describe && weather.description" class="uk-margin-small-bottom">
			{{weather.description}}
		</small>
		<div class="uk-width-1-1  grid triad">

			<div class="uk-flex uk-flex-middle tiny-padding uk-background-primary-op uk-border-rounded">
				<span class="uk-text-primary icon-wind_speed tiny-margin-right uk-h2 uk-margin-remove-vertical"></span>
				<small class="uk-width-expand uk-flex uk-flex-column">
					<span>
						{{weather.wind_speed ? weather.wind_speed : 'N/A'}}
					</span>
					<span>
						Wind Speed
					</span>
				</small>
			</div>

			<div class="uk-flex uk-flex-middle tiny-padding uk-background-primary-op uk-border-rounded">
				<span class="uk-text-primary icon-wind_direction tiny-margin-right uk-h2 uk-margin-remove-vertical"></span>
				<small class="uk-width-expand uk-flex uk-flex-column">
					<span>
						{{weather.wind_direction ? weather.wind_direction : 'N/A'}}
					</span>
					<span>
						Direction
					</span>
				</small>
			</div>

			<div class="uk-flex uk-flex-middle tiny-padding uk-background-primary-op uk-border-rounded">
				<span class="uk-text-primary icon-cloud_coverage tiny-margin-right uk-h2 uk-margin-remove-vertical"></span>
				<small class="uk-width-expand uk-flex uk-flex-column">
					<span>
						{{weather.cloud_coverage ? weather.cloud_coverage : 'N/A'}}
					</span>
					<span>
						Cloud
					</span>
				</small>
			</div>


			<div class="uk-flex uk-flex-middle tiny-padding uk-background-primary-op uk-border-rounded">
				<span class="uk-text-primary icon-temperature tiny-margin-right uk-h2 uk-margin-remove-vertical"></span>
				<small class="uk-width-expand uk-flex uk-flex-column">
					<span>
						{{weather.temperature ? weather.temperature : 'N/A'}}
					</span>
					<span>
						Temperature
					</span>
				</small>
			</div>


			<div class="uk-flex uk-flex-middle tiny-padding uk-background-primary-op uk-border-rounded">
				<span class="uk-text-primary icon-humidity tiny-margin-right uk-h2 uk-margin-remove-vertical"></span>
				<small class="uk-width-expand uk-flex uk-flex-column">
					<span>
						{{weather.humidity ? weather.humidity : 'N/A'}}
					</span>
					<span>
						Humidity
					</span>
				</small>
			</div>


			<div class="uk-flex uk-flex-middle tiny-padding uk-background-primary-op uk-border-rounded">
				<span class="uk-text-primary tiny-margin-right uk-h2 uk-margin-remove-vertical" :class="weather.is_day ? 'icon-day' : 'icon-night'"></span>
				<small class="uk-width-expand uk-flex uk-flex-column">
					<span>
						{{weather.is_day ? 'Day' : 'Night'}}
					</span>
					<span>
						Time
					</span>
				</small>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props : {
		weather : {
			required : true
		},

		describe : {
		default : false,
			type : Boolean
		}
	}
}
</script>

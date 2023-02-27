<template>
	<div>
		<div class="tiny-padding uk-flex" v-if="info.power_source">

			<span :class="`icon-${info.power_source}`" class="ic-large uk-margin-small-right uk-text-color"></span>

			<span class="uk-text-small uk-width-expand">
				This Site Runs on {{info.power_source | capitalize}}
			</span>
		</div>

		<div>
			<div class="tiny-padding border-bottom border-top">
				<h5 class="uk-margin-remove">
					Location Images <small>(Click on Image to view Details)</small>
				</h5>
			</div> 
			<div class="grid triad tiny-padding">
				<div v-for="i in images" :key="i">
					<div class="uk-width-1-1 uk-height-small uk-border-rounded">
						<img :src="i" class="uk-object-cover uk-height-1-1 uk-width-1-1 uk-border-rounded">
					</div>
				</div>
			</div>
		</div>

		<div class="tiny-padding">
			<colo-actions-request :site="{id : info.id, location_id : info.location_id, name: info.name, district : info.district, zone: info.zone, lat:info.lat, lon: info.lon}"></colo-actions-request>
		</div>

	<!-- 	

		<div class="tiny-padding uk-flex uk-flex-middle border-top">

			<span :class="`${info.critical_alarm ? 'uk-text-danger' : 'uk-text-color'}`" class="icon-critical-alarm ic-large uk-margin-small-right"></span>

			<span class="uk-text-small uk-width-expand">
				Critical Alarms
			</span>

			<div class="uk-badge uk-margin-small-left" :class="info.critical_alarm ? 'uk-background-danger' : 'bordered'">
				<small class="uk-text-bold"  :class="info.critical_alarm ? 'uk-text-white' : 'uk-text-color'">
					{{info.critical_alarm ? 'Yes' : 'None'}}
				</small>
			</div>
		</div>



		<div class="tiny-padding uk-flex uk-flex-middle border-top">

			<span :class="`${info.major_alarm ? 'uk-text-danger' : 'uk-text-color'}`" class="icon-major-alarm ic-large uk-margin-small-right"></span>

			<span class="uk-text-small uk-width-expand">
				Major Alarms
			</span>

			<div class="uk-badge uk-margin-small-left" :class="info.major_alarm ? 'uk-background-danger' : 'bordered'">
				<small  class="uk-text-bold" :class="info.major_alarm ? 'uk-text-white' : 'uk-text-color'">
					{{info.major_alarm ? 'Yes' : 'None'}}
				</small>
			</div>
		</div>


		<div class="tiny-padding uk-flex uk-flex-middle border-top">

			<span class="icon-trouble-ticket ic-large uk-margin-small-right" :class="info.has_tt ? 'uk-text-danger' : 'uk-text-color'"></span>

			<span class="uk-text-small uk-width-expand">
				Trouble Tickets
			</span>
			<div class="uk-badge uk-margin-small-left" :class="info.active_tt ? 'uk-background-danger' : 'bordered'">
				<small  class="uk-text-bold" :class="info.active_tt ? 'uk-text-white' : 'uk-text-color'">
					{{info.active_tt | number('0,0')}}
				</small>
			</div>
		</div> -->


		<!-- {{info.details}} -->
	</div>
</template>
<script>
export default {
	props : {

		info : {
			required : true,
			type : Object
		}

	},

	computed : {
		images(){
			return [
				'https://images.unsplash.com/photo-1586188134809-0406be1c768f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29yayUyMHRvd2VyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=2000&q=60',

				'https://images.unsplash.com/photo-1611599280826-0d4a032c4867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldHdvcmslMjB0b3dlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60',
				'https://images.unsplash.com/photo-1674280004409-7f76fc1ff277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5ldHdvcmslMjB0b3dlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60',

				'https://images.unsplash.com/photo-1604042834213-db512237efdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFlcmlhbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60',

				'https://images.unsplash.com/photo-1562191207-43aca7b00412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWVyaWFsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=2000&q=60',

				'https://images.unsplash.com/photo-1597071599760-a2d98f84f689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFlcmlhbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60'
				]
		}
	}
}
</script>

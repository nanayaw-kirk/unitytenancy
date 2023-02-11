<template>
	<div>
		<a href="#" class="uk-flex uk-flex-top">
			<span :class="notifCount ? 'icon-bell uk-text-danger' : 'icon-bell-outline'" class="ic-large"></span>
			<span class="uk-badge uk-background-danger" style="margin-top:-5px">
				<small class="uk-text-white uk-text-bold">
					{{notifCount}}
				</small>
			</span>
		</a>

		<div uk-drop="mode:click; pos: bottom-right; offset:15" class="uk-width-large">
			<div class="uk-width-1-1 background bordered uk-border-rounded uk-box-shadow-large">
				<div class="tiny-padding uk-flex uk-flex-middle uk-flex-between border-bottom">
					<h6 class="uk-margin-remove">
						Notifications
					</h6>

					<div class="chip click bordered uk-border-rounded" @click="clearNotifs()" v-if="notifCount">
						<small>
							Clear All
						</small>
					</div>
				</div>

				<div class="uk-flex uk-flex-middle uk-flex-between border-bottom">
					<div class="uk-width-expand tiny-padding border-right uk-text-center click uk-flex uk-flex-middle uk-flex-center" :class="show === 'sites' ? 'uk-button-view' : ''" @click="show =  'sites'">
						<span class="uk-text-small tiny-margin-right">
							Sites
						</span>

						<span class="uk-badge uk-background-danger">
							<small class="uk-text-white uk-text-bold">
								{{siteNotifications.length}}
							</small>
						</span>
					</div>
					<div class="uk-width-expand tiny-padding uk-text-center click uk-flex uk-flex-middle uk-flex-center" :class="show === 'vehicles' ? 'uk-button-view' : ''" @click="show =  'vehicles'">
						<span class="uk-text-small tiny-margin-right">
							Vehicles
						</span>

						<span class="uk-badge uk-background-danger">
							<small class="uk-text-white uk-text-bold">
								{{vehicleNotifications.length}}
							</small>
						</span>
					</div>
				</div>
				<div class="tiny-padding uk-overflow-auto" style="max-height: 80vh">
					<div v-if="show === 'sites'">
						{{siteNotifications}}
					</div>

					<div v-else>
						{{vehicleNotifications}}
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
			show : 'sites'
		}
	}
}
</script>

<template>
	<div>

		<div class="tiny-padding uk-padding-remove-top">
			<div class="background bordered uk-border-rounded">


				<div class="content-bg uk-flex border-bottom">
					<div class="uk-width-expand tiny-padding">
						<span class="uk-text-small">
							Facility
						</span>
					</div>
					<div class="uk-width-large uk-flex">
						<div class="uk-width-1-3 tiny-padding">
							<span class="uk-text-small">
								Region
							</span>
						</div>
						<div class="uk-width-1-3 tiny-padding">
							<span class="uk-text-small">
								Status
							</span>
						</div>
						<div class="uk-width-1-3 tiny-padding">
							<span class="uk-text-small">
								Date Submitted
							</span>
						</div>
					</div>
				</div>

				<div class="uk-flex uk-flex-middle" v-for="(req, key) in requests" :class="key < requests.length - 1 ? 'border-bottom' : ''">
					<div class="uk-width-expand tiny-padding">
						<span class="uk-text-small">
							{{req.facility}}
						</span>
					</div>
					<div class="uk-width-large uk-flex">
						<div class="uk-width-1-3 tiny-padding">
							<span class="uk-text-small">
								{{req.region}}
							</span>
						</div>
						<div class="uk-width-1-3 tiny-padding uk-flex">
							<div class="uk-flex uk-flex-middle status" :class="req.status">
								<div class="square-10 uk-border-circle tiny-margin-right" :class="`fill-${req.status}`"></div>
								<small>
									{{req.status | capitalize}}
								</small>
							</div>
						</div>
						<div class="uk-width-1-3 tiny-padding">
							<span class="uk-text-small">
								3rd Jan, 2023
							</span>
						</div>
					</div>
				</div>
			</div>
			<nuxt-link :to="{name:'requests'}" v-slot="{navigate}" custom>
				<div class="tiny-padding bordered background uk-text-center uk-border-rounded uk-margin-small-top click" @click="navigate">
					<span class="uk-text-small">
						View All Colo Requests
					</span>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>
<script>
import fake from "@/mixins/fake"
export default {
	data(){
		return {
			truncate : 6
		}
	},
	mixins : [fake]
}
</script>

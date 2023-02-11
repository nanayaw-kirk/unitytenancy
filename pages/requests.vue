<template>
	<div>
		<section class="uk-section uk-section-small padding-normalize compact-h-sm">
			<div class="uk-container">
				<div class="tiny-padding uk-padding-remove-bottom">
					<div class="uk-padding-small background border-top border-right border-left uk-border-rounded">
						<h3 class="uk-margin-remove">
							Manage Colo Requests
						</h3>
					</div>
				</div>

				<div class="tiny-padding uk-padding-remove-top">
					<div class="background uk-border-rounded bordered">


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
					<div class="tiny-padding bordered background uk-text-center uk-border-rounded uk-margin-small-top">
						<span class="uk-text-small">
							Load More
						</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import fake from "@/mixins/fake"
export default {
	mixins : [fake]
}
</script>

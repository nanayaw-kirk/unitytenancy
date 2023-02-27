<template>
	<div>
		<div class="click" @click="$uikit.modal($refs.modal).show()">
			<slot name="action-button">
				<div>
					<button class="uk-button uk-button-primary uk-flex uk-flex-middle uk-flex-center click uk-button-large uk-width-1-1">
						<span class="icon-plus tiny-margin-right uk-text-white"></span>
						<span class="uk-text-white">
							New Colo Request
						</span>
					</button>
				</div>
			</slot>
		</div>

		<div class="uk-flex-top uk-padding-remove mobirize background" uk-modal="esc-close: false; bg-close: false; sel-close: .close-modal; delay-hide: 0; delay-show: 0" ref="modal" :class="colorMode">
			<div class="uk-modal-dialog uk-margin-auto-vertical uk-padding-remove uk-width-large@m uk-border-rounded uk-animation-slide-top-small uk-animation-fast background">
				<div class="uk-flex uk-flex-between border-bottom tiny-padding">
					<div class="uk-width-expand">
						<p class="uk-margin-remove">
							Submit a colo request for site with id {{site.location_id}}.
						</p>
					</div>
					<div class="square-30 uk-border-rounded uk-button-danger click close-modal uk-icon-button">
						<span class="icon-close uk-text-white"></span>
					</div>
				</div>
				<div class="tiny-padding uk-width-1-1 padding-normalize background">
					<form @submit.prevent="" class="uk-width-1-1 uk-flex uk-flex-wrap">
						
						<div class="tiny-padding uk-flex uk-flex-column uk-width-1-1">
							<textarea class="uk-height-small uk-textarea" placeholder="Description"></textarea>
						</div>
						<div class="tiny-padding uk-flex uk-flex-column uk-width-1-1">
							<button class="uk-button uk-button-primary uk-flex uk-flex-middle uk-flex-center click uk-button-large uk-width-1-1">
								<span class="uk-text-white">
									Submit Colo Request
								</span>
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>

	</div>	
</template>
<script>
export default {
	props : {
		site : {
			type : Object,
			required : true
		}
	}
}
</script>

<template>
	<div>
		<div  class="click"  @click="$uikit.modal($refs.authModal).show()">
			<slot name="action-button">
				<button class="uk-button uk-button-primary uk-button-small uk-active">
					Login / Sign Up
				</button>
			</slot>
		</div>

		<div class="uk-flex-top" uk-modal="esc-close : false; bg-close : false; sel-close: .close-modal" ref="authModal" @beforehide="doing = 'LOGIN'">
			<div class="uk-modal-dialog uk-animation-scale-up uk-animation-fast raised  uk-width-large uk-border-rounded uk-margin-auto-vertical">
				<div class="uk-width-1-1 uk-modal-body uk-padding-remove uk-border-rounded raised">

					<div class="uk-flex uk-flex-center uk-padding-small border-bottom">
						<div class="uk-width-1-1 uk-flex uk-child-width-auto uk-flex-center uk-border-rounded uk-width-auto uk-margin-auto bordered grid-padding">
							<div class="grid-padding click" @click="doing = 'LOGIN'" :class="doing !== 'REGISTER' ? 'uk-background-secondary uk-text-white uk-border-rounded' : ''">
								<span class="tiny-padding uk-padding-remove-vertical">
									Login
								</span>
							</div>
							<div class="grid-padding click" @click="doing = 'REGISTER'" :class="doing === 'REGISTER' ? 'uk-background-secondary uk-text-white uk-border-rounded' : ''">
								<span class="tiny-padding uk-padding-remove-vertical">
									Register
								</span>
							</div>
						</div>
					</div>
					
					<div class="uk-padding-small">
						
						<auth-register class="tiny-padding" v-if="doing === 'REGISTER'" @login="doing = 'LOGIN'" @authorized="delegate">
							<button class="uk-button uk-background-secondary-op uk-margin-small-right close-modal" slot="cancel">
								Cancel
							</button>
						</auth-register>

						<auth-login :in-modal="true" class="tiny-padding" v-else-if="doing === 'LOGIN'" @reset="doing = 'RESET'" @register="doing = 'REGISTER'" @authorized="delegate">
							<button class="uk-button uk-background-secondary-op uk-margin-small-right close-modal" slot="cancel">
								Cancel
							</button>
						</auth-login>

						<auth-reset :in-modal="true" class="tiny-padding" v-else @login="doing = 'LOGIN'" @authorized="delegate">
							<button class="uk-button uk-background-secondary-op uk-margin-small-right close-modal" slot="cancel">
								Cancel
							</button>
						</auth-reset>
					</div>

					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			doing : 'LOGIN'
		}
	},

	watch : {
		doing(){
			this.$store.dispatch('validation/clearErrors')
		}
	},

	methods : {
		delegate(){
			this.$uikit.modal(this.$refs.authModal).hide()
			this.$emit('done')
		}
	}
};
</script>

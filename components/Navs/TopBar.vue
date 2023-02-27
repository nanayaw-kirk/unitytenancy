<template>
	<nav class="tiny-padding uk-width-1-1 border-bottom" style="height:50px; background: transparent">
		<div class="uk-container uk-container-expand">
			<div class="uk-flex uk-flex-middle uk-flex-between">
				<div class="uk-flex uk-flex-middle">
					<nuxt-link to="/" class="uk-flex uk-flex-middle">
						<img src="/logo.svg" alt="Logo" width="100">
						<span class="uk-margin-small-left">
							UNITY
						</span>
					</nuxt-link>
				</div>

				<div class="uk-flex uk-flex-right uk-flex-middle">
					<template v-if="$route.name !== 'locations'">
						<nuxt-link :to="{name: 'locations'}"  class="uk-button uk-button-small uk-button-primary uk-margin-right uk-visible@m">
							Map View
						</nuxt-link>
					</template>

					<nuxt-link v-else :to="{name: 'index'}"  class="uk-button uk-button-small uk-button-primary uk-margin-right uk-visible@m">
						Back to Dashboard
					</nuxt-link>
					<div class="uk-margin-left uk-margin-right uk-flex uk-visible@m">
						<span>
							|
						</span>
					</div>
					<div class="uk-margin-right uk-margin-left">
						<theme-toggle></theme-toggle>
					</div>


					<a href="#" @click.prevent="$auth.logout()" class="uk-flex uk-flex-middle">
						<span class="icon-user uk-margin-small-right"></span>
						<span class="uk-text-small">
							Logout
						</span>
					</a>
				</div>
			</div>
			
		</div>
	</nav>	
</template>
<script>
export default {

}
</script>

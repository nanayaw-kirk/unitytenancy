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

		<!-- 		<div class="nav-filters" v-if="$route.name === 'index'">
					<navs-filters></navs-filters>
				</div> -->

				<div class="uk-flex uk-flex-right uk-flex-middle">


					<nuxt-link :to="{name: 'locations'}" class="uk-flex uk-flex-middle uk-margin-right uk-visible@m">
						<span>
							Colo Sites
						</span>
					</nuxt-link>
					<div class="uk-margin-left uk-margin-right uk-flex uk-visible@m">
						<span>
							|
						</span>
					</div>
					<div class="uk-margin-right uk-margin-left">
						<theme-toggle></theme-toggle>
					</div>

				<!-- 	<div class="uk-margin-right">
						<notification-bell></notification-bell>
					</div> -->
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

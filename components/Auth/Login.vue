<template>
	<form class="uk-width-1-1 uk-flex uk-flex-wrap" @submit.prevent="loginUser">
		
		<div class="uk-width-1-1 uk-margin-small-bottom">
			<label>
				
				<span class="uk-text-small">
					Username
				</span>
				<input type="text" class="uk-input uk-form-large" placeholder="Username" required v-model="form.username" @focus="$store.dispatch('validation/clearErrors')">
			</label>

			<span class="uk-text-danger uk-text-small" v-if="errors && errors.username" v-text="errors.username[0]"></span>
		</div>

		<div class="uk-width-1-1 uk-flex uk-flex-column">
			<label>
				
				<span class="uk-text-small">
					Password
				</span>
				<input :type="show ? 'text' : 'password'" class="uk-input uk-form-large" placeholder="6+ Characters" required v-model="form.password" @focus="$store.dispatch('validation/clearErrors')">
			</label>

			<span class="uk-text-danger uk-text-small" v-if="errors && errors.password" v-text="errors.password[0]"></span>


			<div class="uk-margin-top">
				<label class="uk-width-1-1 uk-flex uk-flex-middle uk-flex-wrap">
					
					<input type="checkbox" class="uk-checkbox uk-margin-small-right square-25 uk-border-circle bordered" v-model="show">

					<span class="uk-text-small">
						Show Password
					</span>
					
				</label>
			</div>
		</div>


		<div class="uk-width-1-1 uk-margin-small-top uk-margin-small-bottom border-bottom"></div>

		<div class="uk-width-1-1 uk-flex uk-flex-center">
			<slot name="cancel"></slot>
			<button class="uk-button uk-button-primary uk-width-expand uk-width-medium@m uk-button-large" type="submit" :class="{loading : loading}" :disabled="loading  || !form.password">
				Sign In
			</button>
		</div>
	</form>
</template>
<script>
import {passwordToggle} from "@/utils"
import {login, base} from "@/mixins/auth"
export default{
	
	mixins : [login, base, passwordToggle]
};
</script>

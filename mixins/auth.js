const base = {
	props : {
		inModal : {
			type : Boolean,
		default : false
		}
	},
	
	data(){
		return {
			loading : false
		}
	}
}





const login = {
	data(){
		return {
			form : {
				username : 'nanayaw',
				password : 'D3v@4321',
			}
		}
	},

	methods : {
		async loginUser(){
			this.loading = true
			this.$uikit.notification.closeAll()

			await this.$auth.loginWith('local', {data : this.form})
			.then(res => {
				// let user = res.data.data
				// if (user.suspended) {
				// 	return Promise.reject()
				// }
				// this.$auth.setUser(user)
				this.$uikit.notification({message: `Welcome back`, status : 'primary', timeout : 4000 , pos : 'bottom-center'})
				this.$emit('authorized')
				if (!this.inModal) {					
					this.$router.push({name: 'index'})
				}
			})
			.catch(err => {
				console.log(err)
				this.$uikit.notification({message: `Failed to log you in.`, status : 'danger', timeout : 4000, pos : 'bottom-center'})
			})
			.finally(()=>{
				this.loading = false
			})
		}
	}
}




export {login,base}
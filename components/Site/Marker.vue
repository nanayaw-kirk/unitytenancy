<template>
	<gmap-marker :position="position" title="Site" :clickable="true" @click="$emit('pan-to', site)" :icon="icon">
	<!-- 	<gmap-info-window :position="position" :opened.sync="showInfo"  :options="{maxWidth: 450, width:450}" class="top"  @closeclick="showInfo = false" @domready=""> 
			<div class="uk-padding uk-background-primary">
				{{site}}
			</div>
		</gmap-info-window> -->


	</gmap-marker>
</template>
<script>
export default {
	data(){
		return{
			loading : false,
			showInfo : false,
			showMenu : false,
			menuPosition:{
				x: undefined,
				y: undefined
			},
			weatherInfo : undefined,
		}
	},
	props:{
		site : {
			type : Object,
			required : true
		},
		showButton : {
		default : false,
			type : Boolean
		}

	},
	computed:{
		position(){
			return {
				lat: this.site.lat,
				lng: this.site.lon
			}
		},

		icon(){
			
			return `/icons/site_ok.png`
		}
	},

	// methods : {
	// 	async loadAdditionalInfo(){
	// 		if (this.weatherInfo) {
	// 			return
	// 		}
	// 		this.loading = true
	// 		await this.$axios.$get(`/weather?lat=${this.site.location.latitude}&lon=${this.site.location.longitude}`)
	// 		.then(res => {
	// 			this.weatherInfo = res
	// 		})
	// 		.catch( err =>{
	// 			this.weatherInfo = undefined
	// 		})
	// 		.finally(()=>{
	// 			this.loading = false
	// 		})
	// 	}
	// }
};
</script>
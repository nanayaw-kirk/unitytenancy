<template>
 <div class="uk-flex uk-width-1-1">
   <div class="uk-width-expand">
    <div class="uk-width-1-1 uk-inline">

      <div class="uk-position-top-center uk-position-z-index tiny-padding" v-if="serverLoading || loadingPreview">
        <div style="padding: 4px" class="square-25 uk-flex uk-flex-column uk-flex-middle uk-flex-center background uk-border-circle">
          <spinner></spinner>
        </div>

      </div>
      <div class="uk-position-top-left tiny-padding uk-position-z-index">
        <div class="aside-window uk-border-rounded uk-width-large">
          <div class="background uk-border-rounded uk-width-1-1">
           <unity-search></unity-search>
         </div>
         <div class="aside-window-content uk-overflow-auto">
         </div>
       </div>
     </div>


     <gmap-map ref="mainMap" v-bind="controls" class="uk-width-1-1 content-height">
      <gmap-cluster :ignoreHidden="false" :maxZoom="12" :batchSizeIE="100" :enableRetinaIcons="true" :zoomOnClick="true">
        <site-marker  @pan-to="handleLocationPan" v-for="(location, key) in locations" :site="location" :key="location.id"/>
      </gmap-cluster>
    </gmap-map>


  </div>
</div>
<div class="uk-flex uk-flex-column uk-width-large" style="max-height: 95vh"  v-if="preview && (preview.show && preview.data && preview.data.details && preview.data.site)">
  <div class="uk-height-1-1 uk-overflow-auto">

    <div class="uk-width-1-1 uk-height-small rounded-top uk-inline">

      <div class="uk-position-top-left tiny-padding click uk-position-z-index uk-border-rounded uk-flex uk-flex-column uk-flex-center uk-flex-middle">
        <div class="chip background uk-box-shadow-xlarge uk-border-rounded">
          <span class="text-small">
           New Colo Request
         </span>
       </div>
     </div>

     <div class="square-30 uk-position-top-right uk-background-danger uk-margin-small-top uk-margin-small-right click uk-position-z-index uk-border-rounded uk-flex uk-flex-column uk-flex-center uk-flex-middle" @click="destroyPreview">
      <span class="icon-close uk-text-white uk-text-large"></span>
    </div>
    <img src="/location.png" class="uk-width-1-1 uk-height-1-1 uk-object-cover">
    <div class="uk-position-bottom uk-padding-small">
      <div class="uk-text-white uk-flex uk-flex-column">
        <h3 class="uk-margin-remove h3-responsive uk-text-bold">
          {{preview.data.details.name}}
        </h3>

        <small>
         {{ `${preview.data.site.region ? preview.data.site.region : ''} ${preview.data.site.district ? preview.data.site.district : ''} ${preview.data.site.zone ? preview.data.site.zone : ''}`}}
       </small>
     </div>
   </div>
 </div>
 <div class="info-window-content uk-overflow-auto">
   <template v-if="preview.data.weather && Object.keys(preview.data.weather).length > 0">
    <div class="tiny-padding  uk-flex uk-flex-column">
      <h5 class="uk-margin-remove">
       Weather
     </h5>
     <weather :weather="preview.data.weather" :describe="true"/>  
   </div>
 </template>

 <site-info-window-details class="border-top" :info="{...preview.data.site, details : preview.data.details}"></site-info-window-details>





</div>
</div>

</div>
</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {


  data(){
    return {
      loadingPreview : false,
      preview : {
        show : false,
        type : undefined,
        data : undefined,
      }
    }
  },
  computed : {
    ...mapGetters({
      locations : 'locations/data',
      vehicles : 'vehicles/data'
    }),

    serverLoading(){
      return this.$store.getters['locations/loading'] || this.$store.getters['vehicles/loading']
    },

    controls(){
      return {
        center : this.$store.getters['summary/center'],
        zoom: 6,
        zoomControl : false,
        // mapTypeId : 'satellite'
      }
    }
  },

  methods : {
    handleLocationPan(payload){
      let site = this.locations.find(item=>{return item.id === payload.id})
      if (site) {
        this.previewSite(payload)
      }
    },


    async previewSite(payload){
      this.loadingPreview = true
      const weather = this.$axios.$get(`/netmap/weather-info?lat=${payload.lat}&lon=${payload.lon}`)
      const details = this.$axios.$get(`/netmap/location/${payload.id}/details`)
      await Promise.all([weather, details])
      .then(res=>{
        this.preview.show = true
        this.preview.data = {
          weather : res[0],
          site : payload,
          details : res[1]
        }
      })
      .catch((err)=>{
        alert(`Failed to load site details`)
      })
      .finally(()=>{
        this.loadingPreview = false
      })
    },


    destroyPreview(){
      this.preview = {
       show : false,
       data : undefined
     }
   }
 },

 async mounted(){
  await this.$store.dispatch('summary/getSummary')
  await this.$store.dispatch('locations/connect')
}
}
</script>

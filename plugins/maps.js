import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GmapCluster from 'vue2-google-maps/dist/components/cluster'
export default function({$config}){
  Vue.use(VueGoogleMaps, {
    load: {
      key: $config.MAPS_KEY,
      libraries: 'places', 
      
    },
    installComponents: true,
  })

  Vue.component('GmapCluster', GmapCluster)
}
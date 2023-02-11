import VuexPersistence from 'vuex-persist'
export default ({ store }) => {
  new VuexPersistence({

    reducer: (state) => ({ 
      locations : state.locations,
      vehicles : state.vehicles,
      theme : state.theme
    }),
    /* your options */
  }).plugin(store);
}
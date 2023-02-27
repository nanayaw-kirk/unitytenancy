<template>
  <div class="grid uno compact-sm">
    <div class="uk-padding-small uk-box-shadow-small bordered uk-border-rounded background uk-flex uk-flex-top">
      <div class="square-50 uk-background-primary uk-border-rounded uk-flex uk-flex-column uk-flex-center uk-flex-middle">
        <span class="icon-tower uk-h3 uk-margin-remove uk-text-white"></span>
      </div>
      <div class="uk-width-expand uk-padding-small uk-padding-remove-vertical uk-padding-remove-right uk-flex uk-flex-column">
        <h3 class="uk-margin-remove">
          200
        </h3>
        <span class="uk-text-small">
          Available Colo Sites
        </span>
      </div>

      <nuxt-link class="uk-button uk-button-view uk-button-small uk-margin-small-top uk-margin-auto-right" :to="{name: 'locations'}">
        View Sites
      </nuxt-link>

    </div>


    <div class="uk-padding-small uk-box-shadow-small bordered uk-border-rounded background uk-flex uk-flex-top">
      <div class="square-50 uk-background-primary-op uk-border-rounded uk-flex uk-flex-column uk-flex-center uk-flex-middle">
        <span class="icon-hourglass uk-h3 uk-margin-remove"></span>
      </div>
      <div class="uk-width-expand uk-padding-small uk-padding-remove-vertical uk-padding-remove-right uk-flex uk-flex-column">
        <h3 class="uk-margin-remove">
          15
        </h3>
        <span class="uk-text-small">
          Active Colo Requests
        </span>

      </div>
      <nuxt-link class="uk-button uk-button-view uk-button-small uk-margin-small-top uk-margin-auto-right" :to="{name: 'requests'}">
        View Requests
      </nuxt-link>

    </div>



    <div class="uk-padding-small uk-box-shadow-small bordered uk-border-rounded background uk-flex uk-flex-top">
      <div class="square-50 uk-background-success uk-border-rounded uk-flex uk-flex-column uk-flex-center uk-flex-middle">
        <span class="icon-check uk-h3 uk-margin-remove uk-text-white"></span>
      </div>
      <div class="uk-width-expand uk-padding-small uk-padding-remove-vertical uk-padding-remove-right uk-flex uk-flex-column">
        <h3 class="uk-margin-remove">
          15
        </h3>
        <span class="uk-text-small">
          Approved Colo Requests
        </span>

      </div>
      <nuxt-link class="uk-button uk-button-view uk-button-small uk-margin-small-top uk-margin-auto-right" :to="{name: 'locations'}">
        View Sites
      </nuxt-link>

    </div>

  </div>
</template>
<script>
export default {

}
</script>

<template>
  <div class="uk-width-1-1 uk-inline">
    <template v-if="loaded">
      <main class="uk-inline uk-width-1-1" :class="colorMode">
        <div class="app uk-width-1-1 background" v-if="$nuxt.isOnline">
          <navs-top-bar></navs-top-bar>
          <div class="content-height content-bg uk-width-1-1 uk-overflow-auto">
            <nuxt/>
          </div>
        </div>
      </main>

    </template>

    <splash-screen v-else></splash-screen>
    
  </div>
</template>
<script>
import boot from "@/mixins/boot"
export default{
  mixins : [boot],
  middleware : ['auth'],
  head(){
    return{
      title : `Unity Maps`
    }
  }
};
</script>

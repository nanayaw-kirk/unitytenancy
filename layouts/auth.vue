<template>
  <div class="uk-width-1-1 uk-inline">
    <template v-if="loaded">
      <main class="uk-inline uk-width-1-1" :class="colorMode">
        <div class="app uk-width-1-1" v-if="$nuxt.isOnline">
         <div class="uk-width-large@m uk-margin-auto padding-normalize">
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
  middleware : ['guest'],
  head(){
    return{
      title : `Unity Maps`
    }
  }
};
</script>

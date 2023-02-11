<template>
  <div class="uk-padding uk-padding-remove-bottom">
    <section class="uk-width-1-1">
      <h3 class="uk-margin-remove-top h3-responsive">
        Sign in
      </h3>
      <auth-login></auth-login>
    </section>
  </div>
</template>
<script>
export default{
  layout : 'auth',
  head(){
    return {
      title : `Sign in`
    }
  }
};
</script>

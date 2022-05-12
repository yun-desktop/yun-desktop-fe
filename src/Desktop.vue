<template>
  <div id="desktop">
    
    <!-- LoginView -->
    <login-view :style="style" style="backgroundColor: red;"></login-view>
  </div>
</template>

<script>
import LoginView from './components/login/LoginView.vue'

export default {

  components: {
    'login-view': LoginView
  }
}
</script>

<style lang="scss" scoped>
#desktop {
  height: 100%;
  // background-image: ;
}
</style>
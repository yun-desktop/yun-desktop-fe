<template>
  <div id="login-view" :style="{ backgroundImage: backgroundImage}">
    <ball :size="width"></ball>
  </div>
</template>

<script>
import Ball from './Ball.vue'

export default {
  data() {
    return {
      width: 11,
      backgroundImage: 'linear-gradient(40deg,#00fff0,#677ef8 50%,#c0f)',
    }
  },
  methods: {
  },
  components: {
    'ball': Ball
  },
  created() {
    setTimeout(() => {
      console.log('值变更为30')
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
#login-view {
  position: relative;
  height: 100%;
  perspective: 200px;
}


.ball {
  position: absolute;
  top: 50%;

  width: 500px;
  height: 500px;
  background-color: red;
  border-radius: 50%;
}
</style>
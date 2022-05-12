<template>
  <div 
    id="ball" 
    :style="{ width, height, borderRadius, transform }" 
  >
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  data() {
    return {
      translate3d: {
        x: -50,
        y: -50,
        z: -10,
      },
      bgColor: '#33333388',
    }
  },
  props: {
    size: {
      type: Number,
      default: 50,
    }
  },
  computed: {
    width() {
      return this.size + 'vh'
    },
    height() {
      return this.size * 1.4 + 'vh'
    },
    borderRadius() {
      return this.size * 0.5 + 'vh'
    },
    transform() {
      console.log(this.translate3d.x)
      return `translate3d(${this.translate3d.x}%,${this.translate3d.y}%,${this.translate3d.z}px)`
    }
  },
  methods: {
    runAnimation(animation) {
      const tween = new TWEEN.Tween(this.translate3d)
                          .to({ z: 50 }, 2000)
                          .start()

      function animate() {
        if(TWEEN.update()) requestAnimationFrame(animate)
        else {
          // 执行新一轮动画
        }
      }

      animate()
    }
  },
  mounted() {
    this.runAnimation()
  }
}
</script>

<style lang="scss" scoped>
#ball {
  position: absolute;
  left: 50vw;
  top: 50vh;
  box-shadow: 0 0 5vh black;
  opacity: .5;
}
</style>
import Desktop from './Desktop.vue'

import './assets/scss/global.scss'

/** 添加vh单位 */
Vue.filter('vh', (value) => {
  return value + 'vh'
})

new Vue({
  render: h => h(Desktop)
}).$mount('#desktop')
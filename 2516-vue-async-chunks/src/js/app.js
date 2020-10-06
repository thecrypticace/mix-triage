import * as Vue from "vue"

let app = Vue.createApp({
  setup() {
    return {
      //
    }
  },
})

console.log(app)

app.component(
  'v-button',
  Vue.defineAsyncComponent(
    () => import(
      // TODO: Fix usage of /js/button or allow js/button to work
      /* webpackChunkName: 'js/button' */
      '../vue/button.vue'
    )
  )
)

app.mount('#app')

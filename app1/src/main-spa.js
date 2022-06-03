import Vue from 'vue'
import VueRouter from 'vue-router'
import singleSpaVue from 'single-spa-vue'

import App from './App.vue'
import { createRouter } from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = createRouter()

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    render: (h) => h(App)
  }
})

export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

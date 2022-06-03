import Router from 'vue-router'
import View1 from '../views/View1.vue'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: View1
      }
    ]
  })
}

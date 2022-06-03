import Router from 'vue-router'
import View1 from '../views/View1.vue'
import View2 from '../views/View2.vue'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: View1
      },
      {
        path: '/view2',
        component: View2
      }
    ]
  })
}

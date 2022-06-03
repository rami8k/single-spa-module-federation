<template>
  <div>
    App1 - View1
    <br>
    <a href="/view2">go to app1/view2</a>
  </div>
</template>

<script>
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'

const Article = {
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(Article)
  }
})

export default Article
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

</script>

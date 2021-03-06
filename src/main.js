// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from "vue-resource"
import App from './App'
import routes from './routers'
import axios from 'axios'

/*axios全局配置*/
axios.defaults.baseURL='https://wd4373313083ysocsc.wilddogio.com'
// axios.defaults.headers.common=['Authorization']='Token'
// axios.defaults.headers.post['Content-type']='application/urlencode'
// axios.defaults.headers.get['Accepts']='application/json'


Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)
//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode) {       /*el 代表元素 binding 绑定*/
//     el.style.color='#'+Math.random().toString(16).slice(2,8)
//   }
// })



Vue.directive('theme',{
  bind(el,binding,vnode) {
    if(binding.value=='wide'){
      el.style.maxWidth='1260px'
    }else if(binding.value=='narrow'){
      el.style.maxWidth="560px"
    }
    if(binding.arg=='column'){
      el.style.background="#6677cc";
      el.style.padding="20px";
    }
  }
})

/*自定义过滤器*/
// Vue.filter("to-uppercase",function (value) {
//   return value.toUpperCase()
// })
// Vue.filter("snipet",function (value) {
//   return value.slice(0,100)+"..."
// })

/*创建路由*/
const router=new VueRouter({
  routes:routes,
  mode:"history"
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

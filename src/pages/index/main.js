// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'theme/default/index.css' // 定制化的UI框架
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import './styles/fpi-font/style.css'
import router from './router'
import vuex from 'vuex'
Vue.use(vuex)
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'mini' })
new Vue({
    router,
    ...App
}).$mount('#app')
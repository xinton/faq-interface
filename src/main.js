// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

/*
 * Importação dos middlewares
 */
import logged from './router/middlewares/logged'
import notLogged from './router/middlewares/notLogged'

Vue.config.productionTip = false

/*
 * Vue Resource
 */
Vue.use(VueResource)
Vue.http.options.root = 'http://127.0.0.1:8000'

/*
 * TODO Melhorar login implemetando Vuex ou usando Meta
 * Implementação de middlewares
 */
router.beforeEach((to, from, next) => {
  const context = { to, next, router }
  to.name === 'login' ? logged(context) : notLogged(context)
  return next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

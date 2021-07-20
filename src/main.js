import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fantAwesomeの読み込み－－－－－－－ー
import { library } from '@fortawesome/fontawesome-svg-core'
import{
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)
Vue.component('fa',FontAwesomIcon)
// fantAwesomeの読み込みここまで－－－－－－－ー


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

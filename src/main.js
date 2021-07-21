import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fantAwesomeの読み込み－－－－－－－ー
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)
Vue.component('fa', FontAwesomeIcon)
// fantAwesomeの読み込みここまで－－－－－－－ー

// Firevase連携のコード
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyCm_Eldv0ZxoTT8AS9LxicYlE0dUUsQGeU",
  authDomain: "whisperper-6c358.firebaseapp.com",
  projectId: "whisperper-6c358",
  storageBucket: "whisperper-6c358.appspot.com",
  messagingSenderId: "537977002583",
  appId: "1:537977002583:web:ae5c0ba1b29bfa93256112",
  measurementId: "G-3X6PRRBR1N"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
// Firevase連携のコードここまで



Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

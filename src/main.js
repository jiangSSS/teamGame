// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css' //引入初始化样式

import './style/index.css'
// 引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

// 引入vant-ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import {$axios} from "./untils"
Vue.prototype.$axios = $axios

//  富文本
import VueQuillEditor from "vue-quill-editor"
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

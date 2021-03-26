import Vue from 'vue'
import App from './App'

import uView from "uview-ui"
Vue.use(uView)

import {
	html_height,
	timestamp
} from './util/tools.js'
Vue.prototype.$html_height = html_height

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

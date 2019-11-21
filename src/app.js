
import Vue from "vue"
import {router} from "@/routes"
import App from "./app.vue"

window.$ = require('jquery')

import 'bootstrap';

require("@/assets/js/blk-design-system-pro.mine209.js")

new Vue ({
  el: "#app",
  router,
  render: h => h(App)
})

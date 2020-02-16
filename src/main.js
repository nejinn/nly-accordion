import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./assets/nlyblogfont/iconfont.css";

import NLYblog from "./nlyaccordion";
import "./nlyaccordion/nlyaccordion.js";

Vue.use(NLYblog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

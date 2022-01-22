import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./css/main.css";
import "./my";
import "animate.css/animate.min.css";
import VueTyperPlugin from "vue-typer";
import AOS from "aos";
import "aos/dist/aos.css";

dom.watch();
library.add(fab);

Vue.config.productionTip = false;
AOS.init({
  offset: 100,
  duration: 1200
});
Vue.use(VueTyperPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

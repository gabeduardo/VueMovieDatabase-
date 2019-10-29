import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import locale from "element-ui/lib/locale/lang/en";
import "./assets/element-variable.scss";
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

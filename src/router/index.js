import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Contact from "@/components/Contact";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "*",
      name: "Home",
      component: Home
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});

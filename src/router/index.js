import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import AddMovie from "@/components/AddMovie";
import Movie from "@/components/Movie";

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
    },
    {
      path: "/movies/add",
      name: "AddMovie",
      component: AddMovie
    },
    {
      path: "/movies/:id",
      name: "Movie",
      component: Movie
    }
  ]
});

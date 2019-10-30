<template>
  <div>
    <h2>{{movie.name}}</h2>
    <el-divider></el-divider>
    <p>{{movie.description}}</p>
    <el-divider></el-divider>
    <h5>{{movie.release_year}}</h5>

    <h5 @click="rate">rate this</h5>
  </div>
</template>


<script>
import axios from "axios";
import Vue from "vue";
import StarRating from "vue-star-rating";
const wrapper = document.createElement("div");
// shared state
const state = {
  note: 0
};
// crate component to content
const RatingComponent = Vue.extend({
  data() {
    return { rating: 0 };
  },
  watch: {
    rating(newVal) {
      state.note = newVal;
    }
  },
  template: `
<div class="rating">
How was your experience getting help with this issues?
<star-rating v-model="rating" :show-rating="false"></star-rating>
</div>`,
  components: { "star-rating": StarRating }
});
const component = new RatingComponent().$mount(wrapper);

export default {
  name: "Movie",
  data() {
    return {
      movie: []
    };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    async rate() {
      this.$swal({
        content: component.$el,
        buttons: {
          confirm: {
            value: 5
          }
        }
      }).then(() => {
        const movieId = this.$route.params.id;
        return axios({
          method: "post",
          data: {
            rate: state.note
          },
          url: `http://localhost:8081/movies/rate/${movieId}`,
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(() => {
            this.$swal(`Thank you for rating! ${state.note}`, "success");
          })
          .catch(error => {
            const message = error.response.data.message;
            this.$swal("Oh oo!", `${message}`, "error");
          });
      });
    },

    async fetchMovie() {
      return axios({
        method: "get",
        url: `http://localhost:8081/api/movies/${this.$route.params.id}`
      })
        .then(response => {
          this.movie = response.data;
        })
        .catch(() => {});
    }
  }
};
</script>
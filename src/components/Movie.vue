<template>
  <div>
    <h2>{{movie.name}}</h2>
    <el-divider></el-divider>
    <p>{{movie.description}}</p>
    <el-divider></el-divider>
    <h5>{{movie.release_year}}</h5>
    <div @click="rate">
      <el-rate v-model="value"></el-rate>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Movie",
  data() {
    return {
      movie: [],
      value: 0
    };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    rate: function() {
      const movieId = this.$route.params.id;
      return axios({
        method: "post",
        data: {
          rate: this.value
        },
        url: `http://localhost:8081/movies/rate/${movieId}`,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(() => {
          this.$swal(`Thank you for rating! ${this.value} stars`, "success");
        })
        .catch(error => {
          const message = error.response.data.message;
          this.$swal("Oh oo!", `${message}`, "error");
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
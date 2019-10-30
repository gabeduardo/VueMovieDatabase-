<template>
  <div>
    <h2>{{movie.name}}</h2>
    <el-divider></el-divider>
    <p>{{movie.description}}</p>
    <el-divider></el-divider>
    <h5>{{movie.release_year}}</h5>
  </div>
</template>


<script>
import axios from "axios";
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
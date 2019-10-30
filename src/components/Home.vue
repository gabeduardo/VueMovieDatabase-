<template>
  <el-row :gutter="10">
    <div v-for="movie in movies" :key="movie._id" class="text item">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <router-link :to="{ name: 'Movie', params: { id: movie._id }}">
                <h4>{{movie.name}}</h4>
              </router-link>

              <el-button style="float: right; padding: 3px 0" type="text">Rate this movie</el-button>
            </div>
            <div class="text item">{{movie.description}}</div>
            <div class="bottom clearfix">
              Release year
              <span>{{movie.release_year}}</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </div>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  name: "Movies",
  data() {
    return {
      movies: []
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      return axios({
        method: "get",
        url: "http://localhost:8081/movies"
      })
        .then(response => {
          this.movies = response.data.movies;
        })
        .catch(() => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>

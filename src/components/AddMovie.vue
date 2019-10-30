

<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="Movie name" prop="movie_name">
      <el-input v-model="ruleForm.movie_name"></el-input>
    </el-form-item>
    <el-form-item label="Movie Description" prop="movie_description">
      <el-input type="textarea" v-model="ruleForm.movie_description"></el-input>
    </el-form-item>
    <el-form-item label="Movie Genre" prop="genre">
      <el-input type="textarea" v-model="ruleForm.genre"></el-input>
    </el-form-item>
    <el-form-item label="Release year" prop="movie_release_date">
      <el-date-picker
        type="year"
        placeholder="Pick a release year"
        v-model="ruleForm.movie_release_date"
        style="width: 100%;"
      ></el-date-picker>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      ruleForm: {
        movie_name: "",
        movie_description: "",
        movie_release_date: "",
        ruleForm: "",
        genre: ""
      },
      rules: {
        movie_name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          }
        ],

        movie_release_date: [
          {
            required: true
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          return axios({
            method: "post",
            data: {
              name: this.ruleForm.movie_name,
              description: this.ruleForm.movie_description,
              release_year: this.ruleForm.movie_release_date.getFullYear(),
              genre: this.ruleForm.genre
            },
            url: "http://localhost:8081/movies",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(() => {
              this.$router.push({ name: "Home" });
              //   this.$refs.form.reset();
              this.$swal("Great!", "Movie added successfully!", "success");
              return true;
            })
            .catch(() => {
              alert("sadsad");
              this.$swal("Oh oo!", "Could not add the movie!", "error");
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
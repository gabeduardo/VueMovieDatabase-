<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Star Wars</span>
            <el-button style="float: right; padding: 3px 0" type="text">Rate this movie</el-button>
          </div>
          <div class="text item">
            Luke Skywalker's peaceful and solitary existence gets upended
            when he encounters Rey, a young woman who shows strong signs of the Force.
            Her desire to learn the ways of the Jedi forces Luke to make a decision
            that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead
            the First Order in an all-out assault against Leia and the Resistance for
            supremacy of the galaxy.
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Revenant</span>
            <el-button style="float: right; padding: 3px 0" type="text">Rate this movie</el-button>
          </div>
          <div class="text item">
            While exploring the uncharted wilderness in 1823, frontiersman
            Hugh Glass (Leonardo DiCaprio) sustains life-threatening injuries from a
            brutal bear attack. When a member (Tom Hardy) of his hunting team kills his
            young son (Forrest Goodluck) and leaves him for dead, Glass must utilize
            his survival skills to find a way back to civilization. Grief-stricken and
            fueled by vengeance, the legendary fur trapper treks through the snowy
            terrain to track down the man who betrayed him.
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Pepega name</span>
            <el-button style="float: right; padding: 3px 0" type="text">Rate this movie</el-button>
          </div>
          <div class="text item">
            In the near future, a weary Logan (Hugh Jackman) cares for an
            ailing Professor X (Patrick Stewart) at a remote outpost on the Mexican
            border. His plan to hide from the outside world gets upended when he meets
            a young mutant (Dafne Keen) who is very much like him. Logan must now
            protect the girl and battle the dark forces that want to capture her
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home"
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

<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/home">
                  <i class="el-icon-s-home"></i>Home
                </router-link>
              </el-menu-item>

              <el-menu-item index="1-2">
                <router-link to="/contact">
                  <i class="el-icon-receiving"></i> Contact
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// importando la carpeta de estilos ppal
import "./assets/stylesheets/main.css";
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>

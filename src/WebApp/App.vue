<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside>
        <buttons></buttons>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Grid from "./component/Grid.vue";
import Buttons from "./component/Buttons.vue";
import "./css/main.css";

export default {
  name: "App",
  data: function () {
    return {};
  },
  methods: {},
  components: {
    Grid,
    Buttons,
  },
};
</script>
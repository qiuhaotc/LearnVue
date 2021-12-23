<template>
  <div>
    <el-row>
      <buttons></buttons>
    </el-row>
    <el-row>
      <Grid></Grid>
    </el-row>
    <el-row>
      <router-view></router-view>
    </el-row>
  </div>
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
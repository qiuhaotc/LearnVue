<template>
  <div>
    <h1>Total Clicks: {{ startNumber }}</h1>
    <button-counter
      v-model="startNumber"
      @buttonclick="clickbutton"
    ></button-counter>
    <button-counter
      v-model="startNumber"
      @buttonclick="clickbutton"
    ></button-counter>
    <button value="123" @click="startNumber = 0">To Zero</button>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-row>
    <el-row>
      <Grid></Grid>
    </el-row>
  </div>
</template>

<script>
import test from "./test.js";
import Grid from "./component/Grid.vue";
test();

function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(["Hello", "webpack", "WOW"], " ");

  return element;
}

document.body.appendChild(component());

export default {
  name: "App",
  data: function () {
    return {
      startNumber: 0,
    };
  },
  methods: {
    clickbutton(params) {
      this.startNumber += params;
      console.log("startNumber: " + this.startNumber);
    },
  },
  components: {
    Grid,
  },
};
</script>

<style>
h1 {
  color: #0094ff;
}
</style>
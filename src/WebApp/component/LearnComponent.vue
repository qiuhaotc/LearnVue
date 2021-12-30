<template>
  <div>
    <h5>通过 Prop 向子组件传递数据</h5>
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    ></blog-post>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("blog-post", {
  props: ["title"],
  template: "<h3>{{ title }}</h3>",
});

export default {
  data: function () {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
};
</script>
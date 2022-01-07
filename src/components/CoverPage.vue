
<template>
  <section :data-background-image=cover>
    <h2 class="title">React Optimised Performance</h2>
    <h4 class="subtitle">An aggregation on things I've learned to improve React performance</h4>
  </section>
</template>

<script>
import coverImgUrl from '../assets/cover.jpg'
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {

    });
  },
  data() {
    return {
      cover: coverImgUrl
    };
  }

};
</script>

<style scoped>
.title, .subtitle {
  color: rgb(2, 41, 73);
}
</style>

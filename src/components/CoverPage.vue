
<template>
  <section :data-background-image=cover>
    <h2>React Optimised Performance</h2>
    <h3>A presentation on things I've learned to improve React apps</h3>
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

<style scoped></style>

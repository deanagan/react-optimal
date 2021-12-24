
<template>
  <section :data-background-image=cover>
    <h2 class="title">React Optimised Performance</h2>
    <h4 class="subtitle">A presentation on things I've learned to improve React apps</h4>
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
  color: aquamarine;
}
</style>

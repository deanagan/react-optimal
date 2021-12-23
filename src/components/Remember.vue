<template>
  <section>
    <h3>Remember!</h3>
    <ul class="remember">
      <li class="fragment" v-for="(n,i) in notes" :key=i>{{ n }}</li>
    </ul>
  </section>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {});
  },
  data() {
    return {
      notes: [
        "Beware of premature optimisation",
        "Fix slow renders first before fixing re-renders by determining the bottleneck with the React DevTools profiler",
        "It is best to measure first",
      ],
    };
  },
};
</script>

<style scoped></style>

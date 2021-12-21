<template>
  <section>
    <h3>Contents:</h3>
    <ol class="toc">
      <li class="fragment" v-for="(n, i) in content" :key="i">{{ n }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  data() {
    return {
      content: [
        "React's phases to updating the DOM",
        "Code structure - our plan A to improve performance",
        "React.memo - when we want to avoid component update",
        "useMemo - memoizing any value type, not just functions",
        "useCallback - memoizing callback functions",
        "Inline functions, are they really slow?",
        "State Initializer Pattern",
        "References and Credits to awesome people",
      ],
    };
  },
};
</script>

<style></style>

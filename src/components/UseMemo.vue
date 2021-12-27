<template>
  <section class="usememo">
    <h2 style="text-transform: none">useCallback</h2>
    <ul style="font-size: 0.8em">
      <li class="fragment" v-for="(e, i) in what" :key="i">{{ e }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      what: [
        "useMemo returns a memoized value, caching a value so it isn't recalculated",
        "Returns a memoized value that only changes if the dependencies changed",
        "Addresses problems with referential equality and expensive computations",
      ],
      when: [
        // Add code to demo cases
      ],
      downsides: [
        // Add code to demo poor use
        "Can affect performance thru excessive use in cases where operation is cheap.",

      ],

    };
  },
};
</script>

<style></style>

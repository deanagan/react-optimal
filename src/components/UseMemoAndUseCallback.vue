<template>
  <section class="usememo">
    <h2 style="text-transform: none">useCallback and useMemo</h2>
    <ul style="font-size: 0.8em">
      <li class="fragment" v-for="(e, i) in what" :key="i">{{ e }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  mixins: [dedentStrUsing1stLineIndent],
  data() {
    return {
      whatUseMemo: [
        "useMemo returns a memoized value, caching a value so it isn't recalculated",
        "Returns a memoized value that only changes if the dependencies changed",
        "Addresses problems with expensive computations",
        "Avoid using useMemo on cheap computations to avoid excessive memory use",
        "Memoized computations are not guaranteed to cache values between renders",
        "Overuse can make an app slower since allocations need to happen, even for empty array dependencies",
        "Performance loss with useMemo happens on initial render, but improves subsequent renders",
      ],
      whatUseCallback: [
        "useCallback returns a memoized callback",
        "Returns a memoized version of the callback that only changes if the dependencies changed",
        "Useful when passing callbacks to optimized child components that rely on reference equality \
                    to prevent unnecessary renders (e.g. shouldComponentUpdate).",
        "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).",
      ],
      demo: [
        {
          description: "Add only primitive types to the dependency list, not the whole object/array, especially if the dependency is a prop",
          sandboxlink: "",
          code: "",
        },
        {
          description: "If the dependency is an object/array, use a deep compare function like lodash to avoid unnecessary re-rendering",
          sandboxlink: "",
          code: "",
        }
      ],

    };
  },
};
</script>

<style></style>

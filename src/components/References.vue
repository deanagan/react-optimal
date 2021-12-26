<template>
  <section>
    <h2>Thank You!</h2>
    <h3>References</h3>
    <ul class="references" style="font-size: 0.8em">
      <li v-for="(e, i) in references" :key="i">
        <a :href="e.link">{{ e.text }}</a
        ><br />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      references: [
        { link: "https://reactjs.org/", text: "Offical React Site" },
        {
          link: "https://www.pluralsight.com/courses/optimize-performance-react",
          text: "Optimize Performance for React",
        },
        {
          link: "https://reacttraining.com/blog/react-inline-functions-and-performance",
          text: "React Inline Functions and Performance",
        },
        {
          link: "https://kentcdodds.com/blog/usememo-and-usecallback",
          text: "When to useMemo and useCallback",
        },
        {
          link: "https://kentcdodds.com/blog/fix-the-slow-render-before-you-fix-the-re-render",
          text: "Fix the slow render before you fix the re-render",
        },
        {
          link: "https://kentcdodds.com/blog/the-state-initializer-pattern",
          text: "The state initializer pattern",
        },
        {
          link: "https://overreacted.io/before-you-memo/",
          text: "Before you memo",
        },
        {
          link: "https://blog.logrocket.com/rethinking-hooks-memoization/",
          text: "Rethinking Hooks Memoization",
        },
        {
          link: "https://dmitripavlutin.com/react-useref-guide/",
          text: "React useRef Guide",
        },
      ],
    };
  },
};
</script>

<style></style>

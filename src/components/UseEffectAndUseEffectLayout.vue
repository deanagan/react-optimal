<template>
  <section>
    <section class="useeffect">
      <h3 style="text-transform: none">useMemo</h3>
      <ul style="font-size: 0.8em">
        <li class="fragment" v-for="(e, i) in whatUseEffect" :key="i">{{ e }}</li>
      </ul>
    </section>

  </section>
</template>

<script>
import { dedentStrUsing1stLineIndent } from "../mixins/codetrim";

export default {
  mixins: [dedentStrUsing1stLineIndent],
  data() {
    return {
      whatUseEffect: [
        "The Effect Hook lets you perform side effects in function components",
        "Is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount combined from class based components",
        "useEffect hooks are executed after render, when DOM updates have been done",
        "useEffect is designed to handle one concern, so it is best to use multiple useEffect to separate concerns",
        "useEffect runs both after the first render (regardless of dependency) and after every update",
        "Because useEffect runs when its dependencies change, care must be take to consider Javascript's referential equality rules to avoid infinite loops",
      ],
      sandboxlink:
        "",
      demo: [
        {
          lineNumbers: "",
          description: "",
          sandboxlink: "",
          code: `
          // TODO
          `,
        },
      ],
    };
  },
};
</script>

<style>
.prettyprint.language-javascript.srcCode {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.25em;
  /* width: 100vw; */
}

.comment {
  height: 10px;
  position: absolute;
  top: 450px;
}

.codeheight {
  height: 75%;
}

.container {
  display: flex;
  /* flex-direction: column; */
}
</style>

<script>
import Reveal from "reveal.js/dist/reveal";
import { onMounted } from "vue";
import CoverPage from "./components/CoverPage.vue";
import Remember from "./components/Remember.vue";
import TableOfContents from "./components/TableOfContents.vue";
import RenderPhases from "./components/RenderPhases.vue";
import CodeStructure from "./components/CodeStructure.vue";
import MemoHOC from "./components/MemoHOC.vue";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

export default {
  setup() {
    onMounted(() => {
      Reveal.initialize({
        hash: true,
        // Learn about plugins: https:/revealjs.com/plugins/
        plugins: [RevealHighlight],
        dependencies: [],
        width: 960,
        height: 700,
        pdfSeparateFragments: false,
        pdfMaxPagesPerSlide: 1,
        embedded: false,
        center: true,
      });
    });
  },
  components: {
    CoverPage,
    Remember,
    TableOfContents,
    RenderPhases,
    CodeStructure,
    MemoHOC,
  },
};
</script>
<template>
  <div class="reveal">
    <div class="slides">
      <CoverPage />
      <Remember />
      <TableOfContents />
      <RenderPhases />
      <CodeStructure />
      <MemoHOC />
    </div>
  </div>
</template>

<style>
@import url("../node_modules/reveal.js/dist/reveal.css");
@import url("../node_modules/reveal.js/dist/theme/beige.css");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  width: 100vw;
  margin-left: 0px;
  border-left: 0px;
  padding-bottom: 30px;
  max-width: 100%;
}
</style>

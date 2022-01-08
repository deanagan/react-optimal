<script>
import Reveal from "reveal.js/dist/reveal";
import CoverPage from "./components/CoverPage.vue";
import Remember from "./components/Remember.vue";
import TableOfContents from "./components/TableOfContents.vue";
import RenderPhases from "./components/RenderPhases.vue";
import CodeStructure from "./components/CodeStructure.vue";
import MemoHOC from "./components/MemoHOC.vue";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import References from "./components/References.vue";
import UseMemoAndUseCallback from "./components/UseMemoAndUseCallback.vue";

export default {
  computed: {
    isLoadGraphs() {
      return this.currentSlideIndex === 3;
    }
  },
  mounted() {
    let deck = new Reveal( document.querySelector( '.deck' ), {
      embedded: true,
      keyboardCondition: 'focused'
    } );
    deck.initialize({
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
    deck.on('slidechanged', event => {
      this.onSlideChange(event);
    });
    this.revealobj = deck;
  },
  components: {
    CoverPage,
    Remember,
    TableOfContents,
    RenderPhases,
    CodeStructure,
    MemoHOC,
    References,
    UseMemoAndUseCallback
},
  methods: {
    onSlideChange(event) {
      this.currentSlideIndex = event.indexh;
    }
  },
  data() {
    return {
      revealobj: {},
      currentSlideIndex: 0,
    }
  }
};
</script>
<template>
  <div class="reveal deck">
    <div class="slides">
      <CoverPage />
      <Remember />
      <TableOfContents />
      <RenderPhases :isLoadGraphs={isLoadGraphs} />
      <CodeStructure />
      <MemoHOC />
      <UseMemoAndUseCallback />
      <References />
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

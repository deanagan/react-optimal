<template>
  <section class="phases">
    <h3>React Render Phases</h3>
    <section v-for="(phase, i) in phases" :key="i" data-transition="none">
      <img v-if="phase.drawing" v-bind:src="phase.drawing" />
      <p style="font-size: 0.8em">{{ phase.text }}</p>
      <table style="font-size: 0.4em">
        <tr>
          <td>
            <p>Virtual DOM</p>
            <img
              v-if="phase.vdom"
              :src="phase.vdom"
              :style ="{width:domWidth, height:domHeight}"
            />
          </td>
          <td>{{ " " }}</td>
          <td>{{ " " }}</td>
          <td>{{ " " }}</td>
          <td>{{ " " }}</td>
          <td>{{ " " }}</td>
          <td>
            <p>Actual DOM</p>
            <img
              v-if="phase.dom"
              :src="phase.dom"
              :style ="{width:domWidth, height:domHeight}"
            />
          </td>
        </tr>
      </table>
    </section>
  </section>
</template>

<script>
import vdom1 from '../assets/vdom1.png'
import dom1 from '../assets/dom1.png'
import reactPhasesRender from '../assets/react-phases-render.png'
import reactPhasesReconciliation from '../assets/react-phases-reconciliation.png'
import reactPhasesCommit from '../assets/react-phases-commit.png'

export default {
  data() {
    return {
      phases: [
        {
          drawing: reactPhasesRender,
          text: "Create JSX Elements to form virtual DOM",
          vdom: dom1,
          dom: dom1,
        },
        {
          drawing: reactPhasesReconciliation,
          text: "Compare nodes between virtual DOM and actual browser DOM",
          vdom: vdom1,
          dom: dom1,
        },
        {
          drawing: reactPhasesCommit,
          text: "Update the actual DOM",
          vdom: vdom1,
          dom: vdom1,
        },
      ],
      domWidth: "150px",
      domHeight: "150px",
    };
  },
};
</script>

<style></style>

<template>
  <section class="phases">
    <h3>React Render Phases</h3>
    <section v-for="(phase, i) in phases" :key="i" data-transition="none">
      <div class="mermaid">{{ phase.drawing }}</div>
      <p style="font-size: 0.8em">{{ phase.text }}</p>
      <table class="domCompare">
        <tr>
          <td>
            <p>Virtual DOM</p>
            <div class="mermaid">{{ phase.vdomData }}</div>
          </td>
          <td>{{" "}}</td>
          <td>
            <p>Actual DOM</p>
            <div class="mermaid">{{ phase.actualDomData }}</div>
          </td>
        </tr>
      </table>
    </section>
  </section>
</template>

<script>
import {
  getCurrentInstance,
  watch,
} from "vue";

export default {
  props: ["isLoadGraphs"],

  methods: {
    loadMermaid() {
      import("mermaid/dist/mermaid").then((m) => {
        m.initialize({
          startOnLoad: true,
        });
        m.init();
      });
    },
  },

  setup(props) {
    const instance = getCurrentInstance();

    watch(
      () => props.isLoadGraphs,
      (current, _prev) => {
        if (current.isLoadGraphs) {
          instance.ctx.loadMermaid();
        }
      }
    );
  },

  data() {
    return {
      phases: [
        {
          drawing: `graph LR;
             render-->reconciliation;
             reconciliation-->commit;
             commit-->state[state change];
             state[state change]-->render;
             style render fill:#00FFFF,stroke:#333,stroke-width:4px
             style state fill:#FFF,stroke:#333,stroke-width:0px
            `,
          text: "Create JSX Elements to form virtual DOM",
          vdomData: `flowchart LR;
              id1((div));
              id2((btn));
              id3((span));
              id1-->id2;
              id1-->id3;
            `,
          actualDomData: `flowchart LR;
              id1((div));
              id2((btn));
              id3((span));
              id1-->id2;
              id1-->id3;
            `,
        },
        {
          drawing: `graph LR;
             render-->reconciliation;
             reconciliation-->commit;
             commit-->state[state change];
             state[state change]-->render;
             style reconciliation fill:#00FFFF,stroke:#333,stroke-width:4px
             style state fill:#FFF,stroke:#333,stroke-width:0px
            `,
          text: "Compare nodes between virtual DOM and actual browser DOM",
          vdomData: `flowchart LR;
              id1((div));
              id2((btn));
              id3((span));
              id4((btn));
              id1-->id2;
              id1-->id3;
              id1-->id4;
              style id4 fill:#FFD700,stroke:#333,stroke-width:0px
            `,
          actualDomData: `flowchart LR;
              id1((div));
              id2((btn));
              id3((span));
              id1-->id2;
              id1-->id3;
            `,
        },
        {
          drawing: `graph LR;
             render-->reconciliation;
             reconciliation-->commit;
             commit-->state[state change];
             state[state change]-->render;
             style commit fill:#00FFFF,stroke:#333,stroke-width:4px
             style state fill:#FFF,stroke:#333,stroke-width:0px
            `,
          text: "Update the actual DOM if needed",
          vdomData: `flowchart LR;
              id1((div));
              id2((btn));
              id3((span));
              id4((btn));
              id1-->id2;
              id1-->id3;
              id1-->id4;
              style id4 fill:#FFD700,stroke:#333,stroke-width:0px
            `,
          actualDomData: `flowchart LR;
              id1((div));
              id2((btn));
              id3((span));
              id4((btn));
              id1-->id2;
              id1-->id3;
              id1-->id4;
              style id4 fill:#FFD700,stroke:#333,stroke-width:0px
            `,
        },
      ],
    };
  },
};
</script>

<style>
.phases {
  width: 100%;
}

.domCompare {
  font-size: 0.4em;
}

table.domCompare tr td {
  border: none;
  width: 150px;
  min-height: 100%;
}

table.domCompare tr td p {
  text-align: center;
  font-style: italic;
}
</style>

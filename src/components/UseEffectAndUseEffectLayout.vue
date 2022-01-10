<template>
  <section>
    <section class="useeffect">
      <h3 style="text-transform: none">useMemo</h3>
      <ul style="font-size: 0.8em">
        <li class="fragment" v-for="(e, i) in whatUseMemo" :key="i">{{ e }}</li>
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
        "Is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount from class based components",
        "useEffect hooks are executed after render, when DOM updates have been done",
        "useEffect is designed to handle one concern, so it is best to use multiple useEffect to separate concerns",
        "useEffect runs both after the first render (regardless of dependency) and after every update",
        "F",
      ],
      sandboxlink:
        "https://codesandbox.io/s/usememo-and-usecallback-qvehl?file=/src/App.js",
      demo: [
        {
          lineNumbers: "",
          description:
            "ColorAppV1 is a component that has number increment, and color changing buttons and drop down form. Observe TopColors always re-rendering anytime the app's local state changes. ",
          sandboxlink: "",
          code: `
          export default function ColorAppV1() {
            const [currentColor, setCurrentColor] = useState("blue");
            const [counter, setCounter] = useState(0);
            const setToGreen = () => setToOtherColor("green");
            const setToRed = () => setToOtherColor("red");
            const setToBlue = () => setToOtherColor("blue");
            const incrementCount = () => setCounter(counter + 1);
            const setToOtherColor = (color) => setCurrentColor(color);

            const getColorType = (color) => (['red', 'blue', 'green']).includes(color) ? 'PRIMARY' : 'NON PRIMARY';

            const colors = [
              { name: "red", uniqueId: 1 },
              { name: "green", uniqueId: 2 },
              { name: "blue", uniqueId: 3 },
              { name: "orange", uniqueId: 4 },
              { name: "yellow", uniqueId: 5 },
              { name: "violet", uniqueId: 6 },
              { name: "pink", uniqueId: 7 },
              { name: "gray", uniqueId: 8 },
              { name: "brown", uniqueId: 9 },
              { name: "black", uniqueId: 10 },
              { name: "white", uniqueId: 11 },
            ];

            const colorChoices = colors.filter((c) => c.name !== currentColor);
            const favoriteColors = ['red', 'green', 'blue'];

            return (
              <div className="App">
                <ColoredHeader color={currentColor}>I change color. Counter: {counter}</ColoredHeader>
                <h2>Change the color using the buttons or the drop down!</h2>

                <Button onClick={setToRed}>Red</Button>
                <Button onClick={setToGreen}>Green</Button>
                <Button onClick={setToBlue}>Blue</Button>
                <Button onClick={incrementCount}>Increment Counter</Button>
                <div>Color Type: {getColorType(currentColor)}</div>

                <ColorDropDown
                  colorChoices={colorChoices}
                  currentColor={currentColor}
                  setToColor={setToOtherColor}
                />

                <TopColors colors={favoriteColors}/>
              </div>
            );
          }
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

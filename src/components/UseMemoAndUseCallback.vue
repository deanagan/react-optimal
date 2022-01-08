<template>
  <section>
    <section class="usememo">
      <h3 style="text-transform: none">useMemo</h3>
      <ul style="font-size: 0.8em">
        <li class="fragment" v-for="(e, i) in whatUseMemo" :key="i">{{ e }}</li>
      </ul>
    </section>
    <section class="usecallback">
      <h3 style="text-transform: none">useCallback</h3>
      <ul style="font-size: 0.8em">
        <li class="fragment" v-for="(e, i) in whatUseCallback" :key="i">{{ e }}</li>
      </ul>
    </section>
    <section class="demo">
      <p style="text-transform: none">Demo: useCallback and useMemo<a :href="sandboxlink">[code]</a></p>
      <!-- <template class="container"> -->
        <pre class="prettyprint language-javascript srcCode">
          <template v-for="(d, i) in demo" :key=i>
            <code :class="{fragment: i !== 0 }" data-trim :data-line-numbers=d.lineNumbers>{{ d.code }}</code>
            <span :class="{fragment: true, 'fade-in-then-out': true, comment: true }" >- {{d.description}}</span>
          </template>
        </pre>
      <!-- </template> -->
    </section>
  </section>
</template>

<script>
import { dedentStrUsing1stLineIndent } from '../mixins/codetrim';

export default {
  mixins: [dedentStrUsing1stLineIndent],
  data() {
    return {
      codeSlideNumber: 0,
      whatUseMemo: [
        "useMemo returns a memoized value, caching a value so it isn't recalculated if dependencies don't change",
        "Addresses problems with expensive computations",
        "Avoid using useMemo on cheap computations to avoid excessive memory use",
        "Memoized computations are not guaranteed to cache values between renders",
        "Overuse can make an app slower since allocations need to happen, even for empty array dependencies",
        "Performance loss with useMemo happens on initial render, but improves subsequent renders",
      ],
      whatUseCallback: [
        "Returns a memoized version of the callback that only changes if the dependencies changed",
        "Useful when passing callbacks to optimized child components that rely on reference equality \
                    to prevent unnecessary renders",
        "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)",
      ],
      sandboxlink: "https://codesandbox.io/s/usememo-and-usecallback-qvehl?file=/src/App.js",
      demo: [
        {
          lineNumbers: "",
          description: "Default code: has increment button and color change button. Dropdown can also be used to change color.",
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
        {
          lineNumbers: "",
          description: "Move constants and pure functions out of the component. This will fix the table unnecessarily being rendered by increment or color change.",
          sandboxlink: "",
          code: `
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

          const favoriteColors = ['red', 'green', 'blue'];
          const getColorType = (color) => (['red', 'blue', 'green']).includes(color) ? 'PRIMARY' : 'NON PRIMARY';

          export default function ColorAppV2() {
            const [currentColor, setCurrentColor] = useState("blue");
            const [counter, setCounter] = useState(0);
            const setToGreen = () => setToOtherColor("green");
            const setToRed = () => setToOtherColor("red");
            const setToBlue = () => setToOtherColor("blue");
            const incrementCount = () => setCounter(counter + 1);
            const setToOtherColor = (color) => setCurrentColor(color);

            const colorChoices = colors.filter((c) => c.name !== currentColor);

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
        {
          lineNumbers: "",
          description: "Apply useMemo to colorChoices to prevent drop down from re-rendering when increment is clicked",
          sandboxlink: "",
          code: `
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

          const favoriteColors = ['red', 'green', 'blue'];
          const getColorType = (color) => (['red', 'blue', 'green']).includes(color) ? 'PRIMARY' : 'NON PRIMARY';

          export default function ColorAppV3() {
            const [currentColor, setCurrentColor] = useState("blue");
            const [counter, setCounter] = useState(0);
            const setToGreen = () => setToOtherColor("green");
            const setToRed = () => setToOtherColor("red");
            const setToBlue = () => setToOtherColor("blue");
            const incrementCount = () => setCounter(counter + 1);
            const setToOtherColor = (color) => setCurrentColor(color);

            const colorChoices = useMemo(() => {
              return colors.filter((c) => c.name !== currentColor);
            }, [currentColor]);

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
        {
          lineNumbers: "",
          description: "Apply useCallback to setColor to prevent the setColor function from re-rendering the dropdown.",
          sandboxlink: "",
          code: `
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

          const favoriteColors = ['red', 'green', 'blue'];
          const getColorType = (color) => (['red', 'blue', 'green']).includes(color) ? 'PRIMARY' : 'NON PRIMARY';

          export default function ColorAppV4() {
            const [currentColor, setCurrentColor] = useState("blue");
            const [counter, setCounter] = useState(0);
            const setToGreen = () => setToOtherColor("green");
            const setToRed = () => setToOtherColor("red");
            const setToBlue = () => setToOtherColor("blue");
            const incrementCount = () => setCounter(counter + 1);
            const setToOtherColor = useCallback((color) => setCurrentColor(color), []);

            const colorChoices = useMemo(() => {
              return colors.filter((c) => c.name !== currentColor);
            }, [currentColor]);

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

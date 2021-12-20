new Vue({
  el: ".memohoc",
  data: {
    what: [
      "memo is the functional equivalent of PureComponent.",
      "Checks for prop changes, and only re-renders if they are different.",
      "Does not prevent the current component from re-rendering if its state changes.",
      "By default, comparison is shallow but has an optional 2nd argument to provide custom comparison.",
      "Only exists as a performance optimization. Do not rely on it to “prevent” a render, as this can lead to bugs.",
      "Can be used with redux connect: export const Component = connect(mapStateToProps)(memo(Component))",
    ],
    basicMemo: {
      description: "Basic memo",
      sandboxlink: "https://codesandbox.io/s/basic-memo-cpp2t",
      codes: [
        {
          lineNumbers: "",
          src: dedentStrUsing1stLineIndent(`
          // App contains a counter component that counts increments only
          export default function App() {
            const [count, setCount] = useState(0);
            const [buttonColor, setButtonColor] = useState("blue");
            const setBallToGreen = () => setButtonColor("green");
            const setBallToRed = () => setButtonColor("red");
            const setBallToBlue = () => setButtonColor("blue");

            return (
              <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <Button buttonColor={buttonColor} onClick={() => setCount(count + 1)}>
                  Increment
                </Button>
                <Button onClick={setBallToRed}>Red</Button>
                <Button onClick={setBallToGreen}>Green</Button>
                <Button onClick={setBallToBlue}>Blue</Button>
                <Counter count={count} />
              </div>
            );
          }`),
        },
        {
          lineNumbers: "16-18",
          src: dedentStrUsing1stLineIndent(`
          // Buttons that change color will cause the counter component to re-render which we don't want.
          export default function App() {
            const [count, setCount] = useState(0);
            const [buttonColor, setButtonColor] = useState("blue");
            const setBallToGreen = () => setButtonColor("green");
            const setBallToRed = () => setButtonColor("red");
            const setBallToBlue = () => setButtonColor("blue");

            return (
              <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <Button buttonColor={buttonColor} onClick={() => setCount(count + 1)}>
                  Increment
                </Button>
                <Button onClick={setBallToRed}>Red</Button>
                <Button onClick={setBallToGreen}>Green</Button>
                <Button onClick={setBallToBlue}>Blue</Button>
                <Counter count={count} />
              </div>
            );
          }`),
        },

        {
          lineNumbers: "",
          src: dedentStrUsing1stLineIndent(`
            // To fix it, memoize this counter component
            function Counter({ count }) {
              const renderCountRef = useRef(0);
              const renderCount = renderCountRef.current;

              useEffect(() => {
                renderCountRef.current += 1;
              });

              return (
                <div>
                  <h4>Component 1: Render count: {renderCount} time(s)</h4>
                  <h4>Component 1: Button press count: {count} time(s)</h4>
                </div>
              );
            }
            `),
        },

        {
          lineNumbers: "2,16",
          src: dedentStrUsing1stLineIndent(`
            // Wrapping the Counter with memo prevents the Counter component from re-rendering when the color changes.
            const Counter = memo(({ count }) => {
              const renderCountRef = useRef(0);
              const renderCount = renderCountRef.current;

              useEffect(() => {
                renderCountRef.current += 1;
              });

              return (
                <div>
                  <h4>Component 1: Render count: {renderCount} time(s)</h4>
                  <h4>Component 1: Button press count: {count} time(s)</h4>
                </div>
              );
            });
            `),
        },
      ],
    },

    customMemoCompare: {
      description: "Using custom compare in React.memo",
      sandboxlink: "https://codesandbox.io/s/custom-memo-22ej4",
      codes: [
        {
          lineNumbers: "",
          src: dedentStrUsing1stLineIndent(`
            // An app with a ball info component that re-renders when the ball color is changed or weight is increased.
            export default function App() {
              const [ball, setBall] = useState({ color: "blue", weight: 0 });
              const setBallToGreen = () => setBall({ ...ball, color: "green" });
              const setBallToRed = () => setBall({ ...ball, color: "red" });
              const setBallToBlue = () => setBall({ ...ball, color: "blue" });
              const incrementWeight = () => setBall({ ...ball, weight: ball.weight + 1 });

              return (
                <div className="App">
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
                  <Button buttonColor={ball.color} onClick={incrementWeight}>
                      Increment Weight
                  </Button>
                  <Button onClick={setBallToRed}>Red</Button>
                  <Button onClick={setBallToGreen}>Green</Button>
                  <Button onClick={setBallToBlue}>Blue</Button>
                  <BallInfo ball={ball} />
                </div>
              );
            }`),
        },

        {
          lineNumbers: "19",
          statement:
            "Setting the ball to the same color forces the BallInfo to re-render.",
          src: dedentStrUsing1stLineIndent(`
            // The ball component re-renders when the ball object is updated.
            export default function App() {
              const [ball, setBall] = useState({ color: "blue", weight: 0 });
              const setBallToGreen = () => setBall({ ...ball, color: "green" });
              const setBallToRed = () => setBall({ ...ball, color: "red" });
              const setBallToBlue = () => setBall({ ...ball, color: "blue" });
              const incrementWeight = () => setBall({ ...ball, weight: ball.weight + 1 });

              return (
                <div className="App">
                  <h1>Hello CodeSandbox</h1>
                  <h2>Start editing to see some magic happen!</h2>
                  <Button buttonColor={ball.color} onClick={incrementWeight}>
                      Increment Weight
                  </Button>
                  <Button onClick={setBallToRed}>Red</Button>
                  <Button onClick={setBallToGreen}>Green</Button>
                  <Button onClick={setBallToBlue}>Blue</Button>
                  <MemoizedBallInfo ball={ball} />
                </div>
              );
          }`),
        },

        {
          lineNumbers: "",
          src: dedentStrUsing1stLineIndent(`
            // This component is already memoized, but due to referential equality check,
            // the object is always seen as different.
            function BallInfo({ ball }) {
              const renderCountRef = useRef(0);
              const renderCount = renderCountRef.current;

              useEffect(() => {
                renderCountRef.current += 1;
              });

              return (
                <div>
                  <h4>Render count: {renderCount} time(s)</h4>
                  <h4>Ball change: Color:{ball.color}, Weight:{ball.weight} gram(s)</h4>
                </div>
              );
            }

            const MemoizedBallInfo = memo(BallInfo);
          `),
        },

        {
        lineNumbers: "19",
        src: dedentStrUsing1stLineIndent(`
          // Applying a custom / deep comparison, such as lodash isEqual
          // can fix the memoization to re-render only if color and weight is different.
          function BallInfo({ ball }) {
            const renderCountRef = useRef(0);
            const renderCount = renderCountRef.current;

            useEffect(() => {
              renderCountRef.current += 1;
            });

            return (
              <div>
                <h4>Render count: {renderCount} time(s)</h4>
                <h4>Ball change: Color:{ball.color}, Weight:{ball.weight} gram(s)</h4>
              </div>
            );
          }

          const MemoizedBallInfo = memo(BallInfo, isEqual);
        `),
        },
      ],
    },
  },
});

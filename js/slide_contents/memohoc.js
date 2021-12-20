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
      description: "Basic usage of memo",
      sandboxlink: "https://codesandbox.io/s/basic-memo-cpp2t",
      codes: [
        {
          lineNumbers: "",
          statement:
            "An app with a counter component that re-renders when count is increased",
          src: dedentStrUsing1stLineIndent(`
                        export default function App() {
                            const [count, setCount] = useState(0);
                            const [buttonColor, setButtonColor] = useState("blue");
                            return (
                            <div className="App">
                                <h1>Hello CodeSandbox</h1>
                                <h2>Start editing to see some magic happen!</h2>
                                <Button buttonColor={buttonColor} onClick={() => setCount(count + 1)}>
                                Increment
                                </Button>
                                <Button onClick={() => setButtonColor("red")}>Red</Button>
                                <Button onClick={() => setButtonColor("green")}>Green</Button>
                                <Button onClick={() => setButtonColor("blue")}>Blue</Button>

                                <Counter count={count} />
                                <MemoizedCounter count={count} />
                            </div>
                            );
                        }

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
          lineNumbers: "8-10",
          statement:
            "Increment button increases the count, and causes Counter to re-render",
          src: dedentStrUsing1stLineIndent(`
                        export default function App() {
                            const [count, setCount] = useState(0);
                            const [buttonColor, setButtonColor] = useState("blue");
                            return (
                            <div className="App">
                                <h1>Hello CodeSandbox</h1>
                                <h2>Start editing to see some magic happen!</h2>
                                <Button buttonColor={buttonColor} onClick={() => setCount(count + 1)}>
                                Increment
                                </Button>
                                <Button onClick={() => setButtonColor("red")}>Red</Button>
                                <Button onClick={() => setButtonColor("green")}>Green</Button>
                                <Button onClick={() => setButtonColor("blue")}>Blue</Button>

                                <Counter count={count} />
                            </div>
                            );
                        }

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
          lineNumbers: "11-13",
          statement:
            "Changing button color text re-renders the Counter component which we don't want",
          src: dedentStrUsing1stLineIndent(`
                        export default function App() {
                            const [count, setCount] = useState(0);
                            const [buttonColor, setButtonColor] = useState("blue");
                            return (
                            <div className="App">
                                <h1>Hello CodeSandbox</h1>
                                <h2>Start editing to see some magic happen!</h2>
                                <Button buttonColor={buttonColor} onClick={() => setCount(count + 1)}>
                                Increment
                                </Button>
                                <Button onClick={() => setButtonColor("red")}>Red</Button>
                                <Button onClick={() => setButtonColor("green")}>Green</Button>
                                <Button onClick={() => setButtonColor("blue")}>Blue</Button>

                                <Counter count={count} />
                            </div>
                            );
                        }

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
          lineNumbers: "15,20,34",
          statement:
            "Wrapping the Counter with memo prevents the Counter component from re-rendering when the color changes.",
          src: dedentStrUsing1stLineIndent(`
                        export default function App() {
                            const [count, setCount] = useState(0);
                            const [buttonColor, setButtonColor] = useState("blue");
                            return (
                            <div className="App">
                                <h1>Hello CodeSandbox</h1>
                                <h2>Start editing to see some magic happen!</h2>
                                <Button buttonColor={buttonColor} onClick={() => setCount(count + 1)}>
                                Increment
                                </Button>
                                <Button onClick={() => setButtonColor("red")}>Red</Button>
                                <Button onClick={() => setButtonColor("green")}>Green</Button>
                                <Button onClick={() => setButtonColor("blue")}>Blue</Button>

                                <MemoizedCounter count={count} />
                            </div>
                            );
                        }

                        const MemoizedCounter = memo(({ count }) => {
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
          statement:
            "An app with a ball info component that re-renders when the ball color is changed or weight is increased.",
          src: dedentStrUsing1stLineIndent(`
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
                        }

                        function BallInfo({ ball }) {
                          const renderCountRef = useRef(0);
                          const renderCount = renderCountRef.current;

                          useEffect(() => {
                              renderCountRef.current += 1;
                          });

                          return (
                            <div>
                              <h4>Memoized Component 2: Render count: {renderCount} time(s)</h4>
                              <h4>
                                  Memoized Component 2: Ball change: Color:{ball.color}, Weight:{" "}
                                  {ball.weight} gram(s)
                              </h4>
                            </div>
                          );
                        }

                        const MemoizedBallInfo = memo(BallInfo);
                        `),
        },

        {
          lineNumbers: "16-18,44",
          statement:
            "Setting the ball to the same color forces the BallInfo to re-render.",
          src: dedentStrUsing1stLineIndent(`
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
                        }

                        function BallInfo({ ball }) {
                          const renderCountRef = useRef(0);
                          const renderCount = renderCountRef.current;

                          useEffect(() => {
                              renderCountRef.current += 1;
                          });

                          return (
                            <div>
                              <h4>Memoized Component 2: Render count: {renderCount} time(s)</h4>
                              <h4>
                                  Memoized Component 2: Ball change: Color:{ball.color}, Weight:{" "}
                                  {ball.weight} gram(s)
                              </h4>
                            </div>
                          );
                        }

                        const MemoizedBallInfo = memo(BallInfo);
                        `),
        },

        {
          lineNumbers: "44",
          statement:
            "Using lodash's isEqual will do a deep compare, and can be used as 2nd argument to memo.",
          src: dedentStrUsing1stLineIndent(`
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
                        }

                        function BallInfo({ ball }) {
                          const renderCountRef = useRef(0);
                          const renderCount = renderCountRef.current;

                          useEffect(() => {
                              renderCountRef.current += 1;
                          });

                          return (
                            <div>
                              <h4>Memoized Component 2: Render count: {renderCount} time(s)</h4>
                              <h4>
                                  Memoized Component 2: Ball change: Color:{ball.color}, Weight:{" "}
                                  {ball.weight} gram(s)
                              </h4>
                            </div>
                          );
                        }

                        const MemoizedBallInfo = memo(BallInfo);
                        `),
        },
      ],
    },
  },
});

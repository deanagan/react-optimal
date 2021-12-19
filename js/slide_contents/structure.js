new Vue({
    el: '.structure',
    data : {
        structures : [
            {
                text: 'Move State Down',
                codes: [
                  {
                    lineNumbers: '',
                    src: dedentStrUsing1stLineIndent(`
                    function ExpensiveComponent() {
                      let renderCount = useRef(0);
                      useEffect(() => {
                        const t = setTimeout(() => console.log("expensive tree!"), 2000);
                        renderCount.current += 1;
                        return () => clearTimeout(t);
                      });
                      const totalRender = renderCount.current;
                      return <p>I am a very slow component, rendered {totalRender} times!.</p>;
                    }

                    export default function Problematic() {
                      const [color, setColor] = useState("red");
                      return (
                        <div>
                            <input value={color} onChange={(e) => setColor(e.target.value)} />
                            <p style={{ color }}>Hello, world!</p>
                            <ExpensiveComponent />
                        </div>
                      );
                    }`)
                  },
                  {
                    lineNumbers: '13,16,17',
                    src: dedentStrUsing1stLineIndent(`
                    function ExpensiveComponent() {
                      let renderCount = useRef(0);
                      useEffect(() => {
                        const t = setTimeout(() => console.log("expensive tree!"), 2000);
                        renderCount.current += 1;
                        return () => clearTimeout(t);
                      });
                      const totalRender = renderCount.current;
                      return <p>I am a very slow component, rendered {totalRender} times!.</p>;
                    }

                    export default function Problematic() {
                      const [color, setColor] = useState("red");
                      return (
                        <div>
                            <input value={color} onChange={(e) => setColor(e.target.value)} />
                            <p style={{ color }}>Hello, world!</p>
                            <ExpensiveComponent />
                        </div>
                      );
                    }`)
                  },
                  {
                    lineNumbers: '',
                    src: dedentStrUsing1stLineIndent(`
                    function MovedStateDown() {
                      const [color, setColor] = useState("red");
                      return (
                          <>
                            <input value={color} onChange={(e) => setColor(e.target.value)} />
                            <p style={{ color }}>Hello, world!</p>
                          </>
                      );
                    }

                    export default function Better() {
                      return (
                        <div>
                          <MovedStateDown />
                          <ExpensiveComponent />
                        </div>
                      );
                    }`)
                  },
                ],
                codeSandBoxLink: 'https://codesandbox.io/s/move-state-down-pogbq?file=/src/Better.js'
            },
            {
                text: 'Lift Content Up',
                codes: [
                  {
                    lineNumbers: '',
                    src: dedentStrUsing1stLineIndent(`
                    function ExpensiveComponent() {
                      let renderCount = useRef(0);
                      useEffect(() => {
                        const t = setTimeout(() => console.log("expensive tree!"), 2000);
                        renderCount.current += 1;
                        return () => clearTimeout(t);
                      });
                      const totalRender = renderCount.current;
                      return <p>I am a very slow component, rendered {totalRender} times!.</p>;
                    }

                    export default function Problematic() {
                      const [color, setColor] = useState("red");
                      return (
                        <div style={{ color }}>
                          <input value={color} onChange={(e) => setColor(e.target.value)} />
                          <p>Hello, world!</p>
                          <ExpensiveComponent />
                        </div>
                      );
                    }`)
                  },
                  {
                    lineNumbers: '13,15,16',
                    src: dedentStrUsing1stLineIndent(`
                    function ExpensiveComponent() {
                      let renderCount = useRef(0);
                      useEffect(() => {
                        const t = setTimeout(() => console.log("expensive tree!"), 2000);
                        renderCount.current += 1;
                        return () => clearTimeout(t);
                      });
                      const totalRender = renderCount.current;
                      return <p>I am a very slow component, rendered {totalRender} times!.</p>;
                    }

                    export default function Problematic() {
                      const [color, setColor] = useState("red");
                      return (
                        <div style={{ color }}>
                          <input value={color} onChange={(e) => setColor(e.target.value)} />
                          <p>Hello, world!</p>
                          <ExpensiveComponent />
                        </div>
                      );
                    }`)
                  },
                  {
                    lineNumbers: '',
                    src: dedentStrUsing1stLineIndent(`
                    function LiftContentUp({ children }) {
                      const [color, setColor] = useState("red");
                      return (
                        <div style={{ color }}>
                          <input value={color} onChange={(e) => setColor(e.target.value)} />
                          {children}
                        </div>
                      );
                    }

                    export default function Better() {
                      return (
                        <LiftContentUp>
                          <p>Hello, world!</p>
                          <ExpensiveComponent />
                        </LiftContentUp>
                      );
                    }
                    `)
                  },
                ],
                codeSandBoxLink: 'https://codesandbox.io/s/lift-up-content-qgyyn?file=/src/Better.jsx:664-813'
            },

        ]
    },
})

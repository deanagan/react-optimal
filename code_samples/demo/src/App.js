import React from "react";
import "./styles.css";

const INITIAL_THINGS = [
  {
    id: 1,
    name: "Alex",
    height: "short"
  },
  {
    id: 2,
    name: "Beatriz",
    height: "tall"
  }
];

const ThingRow = React.memo(({ thing, onUpdate }) => {
  console.log(`Rendering row for ${thing.id}`);
  const onUpdateName = (ev) => {
    const newThing = { ...thing };
    newThing.name = ev.target.value;
    onUpdate(newThing);
  };

  const onUpdateHeight = (ev) => {
    const newThing = { ...thing };
    newThing.height = ev.target.value;
    onUpdate(newThing);
  };

  return (
    <tr>
      <td>
        <input type="text" value={thing.name} onChange={onUpdateName} />
      </td>
      <td>
        <select onChange={onUpdateHeight} value={thing.height}>
          <option value="short">Short</option>
          <option value="tall">Tall</option>
        </select>
      </td>
    </tr>
  );
});

const ListOfThings = ({ things, setThings }) => {
  const onUpdate = React.useCallback(
    (thing) => {
      setThings((prevThings) =>
        prevThings.map((t) => (t.id === thing.id ? thing : t))
      );
    },
    [setThings]
  );
  return (
    <table>
      <tbody>
        {things.map((thing) => (
          <ThingRow key={thing.id} thing={thing} onUpdate={onUpdate} />
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  const [things, setThings] = React.useState(INITIAL_THINGS);
  const [title, setTitle] = React.useState("This is a title");
  const onAddThing = () => {
    const newThing = {
      id: Math.random(),
      name: "Default",
      height: "short"
    };
    const newThings = [...things, newThing];
    setThings(newThings);
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        />
      </div>
      <ListOfThings things={things} setThings={setThings} />
      <button type="button" onClick={onAddThing}>
        Add a thing!
      </button>
    </div>
  );
}

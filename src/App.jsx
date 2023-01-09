import "./App.scss";
import { useContext } from "react";
import { BoatContext } from "./BoatContext";

const App = () => {
  const { state, dispatch } = useContext(BoatContext);

  return (
    <div className="App">
      <h1>Boat Engine Game</h1>
      <h3>The boat engine is {state.start}</h3>
      <h3>The gear is {state.gear}</h3>
      <h3>The speed is {state.speed}</h3>

      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "gearUp" })}>Gear Up</button>
        <button onClick={() => dispatch({ type: "gearDown" })}>
          Gear Down
        </button>
        <button onClick={() => dispatch({ type: "speedUp" })}>Speed Up</button>
        <button onClick={() => dispatch({ type: "speedDown" })}>
          Speed Down
        </button>
      </div>
    </div>
  );
};

export default App;

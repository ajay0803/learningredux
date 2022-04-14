import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/actions";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
}

export default App;

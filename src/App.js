import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment, Reset } from "./store/Counter";

function App() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(Increment());
  };
  const handleDecrement = () => {
    dispatch(Decrement());
  };
  const handleReset = () => {
    dispatch(Reset());
  };
  return (
    <div className="container">
      <div className="m-5 p-5 shadow">
        <h1 className="text-primary mb-5">Count: {counter}</h1>
        <button onClick={handleIncrement} className="btn btn-primary mr-2">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-primary mr-2">
          Decrement
        </button>
        <button onClick={handleReset} className="btn btn-primary mr-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

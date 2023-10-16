
import { useSelector,useDispatch } from "react-redux";
import {increment, reset, decrement} from './counterSlice'
import type { RootState } from './store'


const Counter = () => {
const count = useSelector((state: RootState)=> state.counter.count);
const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
   dispatch(reset());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>React Redux Example</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;

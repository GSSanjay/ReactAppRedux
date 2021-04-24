import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dec, inc, login } from "./actions/index";

const ReduxApp = () => {
  const count = useSelector((state) => state.Count);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(inc({ payload: 2, name: "Sanjay" }));
  };

  const decrement = () => {
    dispatch(dec());
  };
  return (
    <>
      <h1>Redux App</h1>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default ReduxApp;

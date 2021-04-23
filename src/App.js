import React from "react";
import { createStore } from "redux";

// Actions
const inc = () => {
  return { type: "INC" };
};

const dec = () => {
  return { type: "DEC" };
};

// Reducers
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      console.log("inc");
      state = state + 1;
      console.log(state);
      return state;
    case "DEC":
      console.log("dec");
      state = state - 1;
      console.log(state);
      return state;
    default:
      return state;
  }
};

//Store
const store = createStore(reducer);

// Dispatch
store.dispatch(inc());
store.dispatch(dec());
store.dispatch(dec());

const App = () => {
  return (
    <>
      <h1>App - Redux</h1>
    </>
  );
};

export default App;

const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      console.log("inc");
      console.log(action.payload);
      console.log("Name:", action.name);
      return state + action.payload;
    case "DEC":
      console.log("dec");
      return state - 1;
    default:
      return state;
  }
};

export default CountReducer;

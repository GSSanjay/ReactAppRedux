const LoginReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      console.log("Logged in");
      return !state;
    default:
      console.log("Not logged in ");
      return state;
  }
};

export default LoginReducer;

export const inc = ({ payload, name }) => {
  return {
    type: "INC",
    payload: payload,
    name: name,
  };
};

export const dec = () => {
  return {
    type: "DEC",
  };
};

export const login = () => {
  return {
    type: "LOGGED_IN",
  };
};

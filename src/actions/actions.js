export const increment = (load) => {
  return {
    type: "INCREMENT",
    payload: load,
  };
};
export const decrement = (load) => {
  return {
    type: "DECREMENT",
    payload: load,
  };
};

export const isLogged = () => {
  return {
    type: "ISLOGGED",
  };
};

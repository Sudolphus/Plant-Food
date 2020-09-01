const initialState = {
  soil: 0,
  water: 0,
  light: 0
};

export const stateGenerator = () => {
  let count = 0;
  return () => {
    count++;
    let currentState = {...initialState, name: "plant"+count};
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    };
  };
};

export const storeState = () => {
  let currentState = {...initialState};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};
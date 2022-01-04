/* eslint-disable no-unreachable */
const initialState = false;

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
      break;
    default:
      return state;
  }
};

export default LoadingReducer;

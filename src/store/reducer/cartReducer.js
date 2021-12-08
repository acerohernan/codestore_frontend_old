const initialState = {
  isOpen: false,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "HANDLE_CART":
      return { ...state, isOpen: payload };
    default:
      return state;
  }
};

export default cartReducer;

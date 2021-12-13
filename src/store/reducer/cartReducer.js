/* eslint-disable no-unreachable */
const initialState = {
  isOpen: false,
  products: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "HANDLE_CART":
      return { ...state, isOpen: payload };
      break;

    case "ADD_PRODUCT":
      const productAdded = state.products.find(
        (product) => product.id === payload.id
      );

      if (productAdded) {
        const listOfProducts = state.products.filter(
          (product) => product.id !== payload.id
        );

        return {
          ...state,
          products: [
            ...listOfProducts,
            {
              ...productAdded,
              quantity: productAdded.quantity + 1,
              size: payload.size,
            },
          ],
        };
      }

      return { ...state, products: [...state.products, payload] };
      break;

    case "REMOVE_PRODUCT":
      const newListOfProducts = state.products.filter(
        (product) => product.id !== payload.id
      );
      return { ...state, products: [...newListOfProducts] };
      break;

    case "REDUCE_QUANTITY":
      const product = state.products.find(
        (product) => product.id === payload.id
      );
      const listOfProducts = state.products.filter(
        (product) => product.id !== payload.id
      );
      return {
        ...state,
        products: [
          ...listOfProducts,
          {
            ...product,
            quantity: product.quantity - 1,
          },
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;

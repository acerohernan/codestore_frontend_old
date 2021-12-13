export const handleCartAction = (payload) => ({
  type: "HANDLE_CART",
  payload,
});

export const addProductAction = (payload) => ({
  type: "ADD_PRODUCT",
  payload,
});

export const removeProductAction = (payload) => ({
  type: "REMOVE_PRODUCT",
  payload,
});

export const reduceQuantityAction = (payload) => ({
  type: "REDUCE_QUANTITY",
  payload,
});

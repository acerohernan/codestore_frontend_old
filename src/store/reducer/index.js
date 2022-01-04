import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import loadingReducer from "./loadingReducer";

const reducer = combineReducers({
  cart: cartReducer,
  loading: loadingReducer,
});

export default reducer;

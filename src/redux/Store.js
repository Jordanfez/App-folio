import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducer
import { cartReducer } from "./reducers/cartReducers";
import { getProductDetailsReducer, getProductReducer } from "./reducers/productReducers";

const reducers = combineReducers({
    cart: cartReducer,
    getProducts : getProductReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
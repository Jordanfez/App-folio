import * as actionTypes from '../constants/cartConstants'
import axios from 'axios';


export const addToCart = (_id, qty) => async (dispach, getState ) => {
    const { produits } = await (`produits/${_id}`);

    dispach({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: produits._id,
            name : produits.name,
            image: produits.image,
            prive: produits.price,
            countInstock: produits.countInstock,
            qty,
        },
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (_id) => (dispach, getState) => {
    dispach({
        type: actionTypes.REMOVE_FROM_CART,
        payload: _id,
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}
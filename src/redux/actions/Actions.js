import { ADD_TO_CART, REMOVE_FORM_CART } from "../ActionTypes";

export const addItemToCart = data => ({
    type:ADD_TO_CART,
    payload: data,
});
export const removeFormCart = index =>({
    type: REMOVE_FORM_CART,
    payload: index,
})
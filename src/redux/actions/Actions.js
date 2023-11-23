import { ADD_TO_CART, REMOVE_FORM_CART } from "../ActionTypes";

export const addItemToCart = data => ({
    type:ADD_TO_CART,
    payload: data,
});
export const removeFormCart = index =>({
    type: REMOVE_FORM_CART,
    payload: index,
})
export const updateEmail = (data,isloading) =>({
    type: CAP_NHAT_EMAIL,
    arrUser: data,
    isloading:isloading
});
export const arrCategories = data =>({
    type: FECTH_CATEGORIES,
    arrCategories: data,
});
export const addToWishlist = data =>({
    type: ADD_TO_WISHLIST,
    payload: data,
});

export const removeFormWishlist = index =>({
    type: REMOVE_FORM_WISHLIST,
    payload: index,
});

import shop from '../api/products';
import * as types from '../constants/ActionTypes';

const receiveProducts = products => {
    return {
        type: types.RECEIVE_PRODUCTS,
        products
    }
};

const getAllProducts = (dispatch) => {
    shop.getProducts((products)=>{
       dispatch(receiveProducts(products));
    });
};

const addToCartUnsafe = productId => {
    return {
        type: types.ADD_TO_CART,
        productId
    }
};

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()

    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
}

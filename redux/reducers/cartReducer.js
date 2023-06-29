import { ADD_TO_CART } from "../actions";



const initialCartState = {
     cart: [],
}


 export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      default:
        return state;
    }
  }
 
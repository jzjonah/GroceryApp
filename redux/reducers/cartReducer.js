import { ADD_TO_CART, INCREASE_ID_COUNTER, ADD_TO_TOTAL} from "../actions";



const initialCartState = {
  cart: { items: [], cost: 0 }, // Modify the structure to include 'items' and 'cost'
  idNum: 1,
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, action.payload],
        },
      };
    case INCREASE_ID_COUNTER:
      return {
        ...state,
        idNum: state.idNum + 1,
      };
      case ADD_TO_TOTAL:
        return {
          ...state,
          cart: {
            ...state.cart,
            cost: state.cart.cost + action.payload,
          },
        };
    default:
      return state;
  }
};
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_ID_COUNTER = 'INCREASE_ID_COUNTER';
export const ADD_TO_TOTAL= "ADD_TO_TOTAL";

export const setName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_USER_EMAIL,
    payload: email,
  };
};

export const addToCart = (name, id) => {
  return {
    type: ADD_TO_CART,
    payload:{
      item:name,
      id:id
    }
  };
}; 

export const increaseCounter = () =>{
  return{
    type:INCREASE_ID_COUNTER
  }
}

export const addToTotal = (amount) => {
return{
  type: ADD_TO_TOTAL,
  payload: amount
}

}
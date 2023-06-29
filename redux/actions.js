export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';

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
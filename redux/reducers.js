import { SET_USER_NAME, SET_USER_EMAIL} from "./actions";

const initialUserState = {
    name:'initial name',
    email:'inital',

    
}

function userReducer(state = initialUserState, action){
    switch(action.type){
        case SET_USER_NAME:
            return{...state, name: action.payload};
        case SET_USER_EMAIL:
            return{...state, email: action.payload};
        default:
            return state;
    }
}

export default userReducer;
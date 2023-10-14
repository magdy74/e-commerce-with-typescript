import { AnyAction } from "redux";
import { setCurrentUser } from "./user.actions";
import { UserData } from "../../firebase/firebase.utils";

export type UserState = {currentUser: null | UserData}

const INITIAL_STATE: UserState = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if(setCurrentUser.match(action)){
        return{
            ...state,
            currentUser: action.payload
        }
    } else{
        return state;
    }
}

export default userReducer;
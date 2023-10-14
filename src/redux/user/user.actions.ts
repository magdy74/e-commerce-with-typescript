import { ActionWithPayload, createAction, withMatcher } from "../../utilis/reducer/reducer.utilis"
import { UserActionTypes } from "./user.types"
import { UserData } from "../../firebase/firebase.utils";

type SetCurrentUser = ActionWithPayload<UserActionTypes.SET_CURRENT_USER, UserData>;

export const setCurrentUser = withMatcher((user: UserData) : SetCurrentUser => createAction(UserActionTypes.SET_CURRENT_USER, user));
import { createSelector } from "reselect";
import { RootReducer } from "../store";
import { UserState } from "./user.reducer";

const selectUser = (state: RootReducer): UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUser,
    (user) => user.currentUser
)


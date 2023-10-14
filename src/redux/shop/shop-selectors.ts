import { createSelector} from "reselect";
import { RootReducer } from "../store";
import { CategoriesState } from "./shop-reducer";

const selectShop = (state: RootReducer): CategoriesState => state.shop;

export const selectShopCollections = createSelector(
    selectShop,
    (shop) => shop.collections
)

export const selectShopIsLoading = createSelector(
    selectShop,
    (shop) => shop.isLoading
)


export const selectCollection = (locationParam: string) => createSelector(
    selectShopCollections,
    (collections) => {
    const collection = collections.find((collection) => collection.routeName === locationParam)
    return collection
    }
)
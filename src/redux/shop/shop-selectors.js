import { createSelector} from "reselect";


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    selectShop,
    (shop) => shop.collections
)

export const selectShopIsLoading = createSelector(
    selectShop,
    (shop) => shop.isLoading
)


export const selectCollection = locationParam => createSelector(
    selectShopCollections,
    (collections) => {
    const collection = collections.find((collection) => collection.routeName === locationParam)
    return collection
    }
)
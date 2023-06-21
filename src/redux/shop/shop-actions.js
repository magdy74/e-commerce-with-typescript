import ShopActionTypes from "./shop-types";
import { getCategoriesDB } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})


export const fetchCollectionsSuccess = (categoriesArray) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: categoriesArray
})

export const fetchCollectionsFailed = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILED,
    payload: error
})


export const fetchCollectionsAsync = () => async (dispatch) => {
    dispatch(fetchCollectionsStart())
    try{
        const collectionsArray = await getCategoriesDB()
        dispatch(fetchCollectionsSuccess(collectionsArray))
    }
    catch(error){
        dispatch(fetchCollectionsFailed(error))
    }
}

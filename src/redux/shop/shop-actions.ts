import { ShopActionTypes, Category} from "./shop-types";
import { getCategoriesDB } from "../../firebase/firebase.utils";
import { createAction, Action, ActionWithPayload,  withMatcher } from "../../utilis/reducer/reducer.utilis";
import { AnyAction } from "redux";



export type FetchCollectionsStart = Action<ShopActionTypes.FETCH_COLLECTIONS_START>

export type FetchCollectionsSuccess = ActionWithPayload<ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, Category[]>

export type FetchCollectionsFailed = ActionWithPayload<ShopActionTypes.FETCH_COLLECTIONS_FAILED, Error| string>

export type CollectionAction = FetchCollectionsStart | FetchCollectionsSuccess | FetchCollectionsFailed;



export const fetchCollectionsStart = withMatcher((): FetchCollectionsStart  =>  
    createAction(ShopActionTypes.FETCH_COLLECTIONS_START));


export const fetchCollectionsSuccess = withMatcher((categoriesArray: Category[]): FetchCollectionsSuccess =>
    createAction(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, categoriesArray));

export const fetchCollectionsFailed = withMatcher((error: Error): FetchCollectionsFailed =>
    createAction(ShopActionTypes.FETCH_COLLECTIONS_FAILED, error));



export const fetchCollectionsAsync = () => async (dispatch: (fun: CollectionAction) => AnyAction ) => {
    dispatch(fetchCollectionsStart())
    try{
        const collectionsArray = await getCategoriesDB()
        dispatch(fetchCollectionsSuccess(collectionsArray))
    }
    catch(error){     
            dispatch(fetchCollectionsFailed((error as Error)))
      
}
}

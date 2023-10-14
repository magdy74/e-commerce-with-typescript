import { CollectionAction, fetchCollectionsFailed, fetchCollectionsStart, fetchCollectionsSuccess } from "./shop-actions";
import { Category } from "./shop-types";

export type CategoriesState ={
  readonly collections: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}


const INITIAL_STATE: CategoriesState = {
    collections : [],
    isLoading:false,
    error:null
    }




const shopReducer = (state=INITIAL_STATE, action: CollectionAction): CategoriesState => {
  
  if(fetchCollectionsStart.match(action)){
    return {...state, isLoading:true}
  }
  else if(fetchCollectionsSuccess.match(action)){
    return{
              ...state,
              collections: action.payload,
              isLoading:false
          }
  }

  else if(fetchCollectionsFailed.match(action)){
    return {...state, isLoading:false, error: (action.payload as Error)}
  }
  
  else{
    return state;
  }
  

}

export default shopReducer;
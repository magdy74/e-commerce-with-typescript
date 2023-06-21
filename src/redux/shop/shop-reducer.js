import ShopActionTypes from "./shop-types";

const INITIAL_STATE = {
    collections : [],
    isLoading:false,
    error:null
    }




const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
      case ShopActionTypes.FETCH_COLLECTIONS_START:
        return {...state, isLoading:true}
      
      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return{
            ...state,
            collections: action.payload,
            isLoading:false
        }

      case ShopActionTypes.FETCH_COLLECTIONS_FAILED:
        return {...state, isLoading:false, error: action.payload}
        
      default:
        return state;
    }
}

export default shopReducer;
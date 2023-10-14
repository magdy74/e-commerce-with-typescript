export enum ShopActionTypes {
    SET_CURRENT_COLLECTIONS = 'SET_CURRENT_COLLECTIONS',
    FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAILED = 'FETCH_COLLECTIONS_FAILED'

}


export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number
}

export type Category = {
    title:string;
    imageUrl:string;
    routeName: string;
    items: CategoryItem[];

}


export default ShopActionTypes;
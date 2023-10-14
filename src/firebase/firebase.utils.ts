import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { getFirestore,  doc, getDoc, setDoc, collection, writeBatch, query, getDocs, QueryDocumentSnapshot} from "firebase/firestore";
import { Category } from '../redux/shop/shop-types';

// config the fireStore and intialize app
const config = {
    apiKey: "AIzaSyAWwlBELOsuY3LVskC78R0DfG-z5o7ildg",
    authDomain: "e-commerce-b635c.firebaseapp.com",
    projectId: "e-commerce-b635c",
    storageBucket: "e-commerce-b635c.appspot.com",
    messagingSenderId: "737142688521",
    appId: "1:737142688521:web:31ef94e0e21851b0c7a1d8",
    measurementId: "G-Y214Y0G1J0"
  };

const app = initializeApp(config);

// Autentication 
export const auth = getAuth();

// Autentication Gmail
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =() => signInWithPopup(auth, provider);


// Store data in fireStore database
type AdditionalData= {
  displayName?: string;
}

export type UserData = {
  displayName: string;
  email: string;
  createdAt:Date;
}

const db = getFirestore(app);
export const createUserProfileDocument = async (userAuth: User, additionalData: AdditionalData): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth){
    return;
  }
  const docRef = doc(db, "users", `${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch{
      console.log('error creating user')
    }
  }
  return docSnap as QueryDocumentSnapshot<UserData>;
}

// addCollectionstoDB

type ObjectToAdd = {
  title: string;
}

export const addCollectionToDb = async <T extends ObjectToAdd>(collectionName: string, objectToAdd: T[]) : Promise<void> =>{
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db)
  objectToAdd.forEach((obj) => {
    const objRef = doc(collectionRef, obj.title.toLowerCase())
    console.log(obj)
    batch.set(objRef, obj)
  })
    await batch.commit()
    console.log("done")
  }
  

  // getCategoriesDB

export const getCategoriesDB = async () : Promise<Category[]> =>{
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const dataArray: Category[] = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    dataArray.push(doc.data() as Category);
  });
  return dataArray

}
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,  doc, getDoc, setDoc} from "firebase/firestore";

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

// Autentication email and password

// Sign up new users
export const SignUpWithEmailAndPassword = (email,password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password, displayName)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    user.displayName= displayName
    console.log(userCredential)
    console.log(user)
    // ...
  })
  .catch((error) => {
    console.log("error user sign up")
    // ..
  });
}
// Sign in existing users
export const SignInWithEmailAndPassword = (email,password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log("error user sign in")
  });}


// Store data in fireStore database
const db = getFirestore(app);
export const createUserProfileDocument = async (userAuth, additionalData) => {
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
  return docRef;
}
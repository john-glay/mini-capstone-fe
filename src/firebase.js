import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-CN52nsBAgPvlWzm3ay9diOK5wJg5EN8",
  authDomain: "react-emart-b9b06.firebaseapp.com",
  projectId: "react-emart-b9b06",
  storageBucket: "react-emart-b9b06.appspot.com",
  messagingSenderId: "478984077123",
  appId: "1:478984077123:web:6d2ce8737fcda628faf9f6"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 
  
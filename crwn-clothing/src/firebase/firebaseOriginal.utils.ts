import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyB3Rs3PWVrdSY5U8bXSo6kKbgN4esraXL4",
  authDomain: "crwn-db-a1777-6ff0f.firebaseapp.com",
  projectId: "crwn-db-a1777-6ff0f",
  storageBucket: "crwn-db-a1777-6ff0f.appspot.com",
  messagingSenderId: "558507459853",
  appId: "1:558507459853:web:92a23ac8e67e0e7cd9dc44",
  measurementId: "G-GFQ00P8F06",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

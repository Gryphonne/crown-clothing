import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAtCGq79z2n6t_BhxRwlH9e57_ThMZ4Kxw",
  authDomain: "crown-db-5cd4e.firebaseapp.com",
  databaseURL: "https://crown-db-5cd4e.firebaseio.com",
  projectId: "crown-db-5cd4e",
  storageBucket: "crown-db-5cd4e.appspot.com",
  messagingSenderId: "1079161212722",
  appId: "1:1079161212722:web:d9af72ca294de09bd4512b",
  measurementId: "G-FD2CR1MSSV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

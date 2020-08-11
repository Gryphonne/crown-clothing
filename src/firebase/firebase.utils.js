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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

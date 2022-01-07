import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyAlGsyKOeECpl_mQFSngOf0OiHNm6FmBYo",
    authDomain: "hassan-db.firebaseapp.com",
    projectId: "hassan-db",
    storageBucket: "hassan-db.appspot.com",
    messagingSenderId: "594807220729",
    appId: "1:594807220729:web:e1eaba154734e39c207528",
    measurementId: "G-HHERVKJFLM"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if  (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

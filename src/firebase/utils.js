import firebase from "firebase";
import {firebaseConfig} from "./config";
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt: 'select_account'})
export const singInWithGoogle = () => auth.signInWithPopup(GoogleProvider)

export const handleUserProfile = async (userAuth, additionalUserData) => {
    if (!userAuth) return;
    const {uid} = userAuth;

    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const timestamp = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createDate: timestamp,
                ...additionalUserData
            })
        } catch (err) {
            console.log(err)
        }
    }
    return userRef;
}

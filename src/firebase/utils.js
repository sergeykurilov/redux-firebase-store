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

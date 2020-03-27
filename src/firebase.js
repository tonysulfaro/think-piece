import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCgdsRpHSuS3BE0xUd0exzkdV4qCco-xKg",
  authDomain: "first-flight-f60b5.firebaseapp.com",
  databaseURL: "https://first-flight-f60b5.firebaseio.com",
  projectId: "first-flight-f60b5",
  storageBucket: "first-flight-f60b5.appspot.com",
  messagingSenderId: "23718272440",
  appId: "1:23718272440:web:6a8f29c8704f024011834d",
  measurementId: "G-6VBT40RPFW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

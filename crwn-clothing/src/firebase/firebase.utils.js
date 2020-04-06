import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQu2-z6bVz4eJmQ8hOC6qt7w5JOUEKbc8",
  authDomain: "crown-clothing-db-2137c.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-2137c.firebaseio.com",
  projectId: "crown-clothing-db-2137c",
  storageBucket: "crown-clothing-db-2137c.appspot.com",
  messagingSenderId: "821418168229",
  appId: "1:821418168229:web:d1bc1bd5a0aa4c4ac5224c",
  measurementId: "G-0XB7991XEM"
};

firebase.initializeApp(config);

//We imported auth and with this we have access to 'auth'
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//This gives us the access to New Google Auth Provider from Authentication Library
const provider = new firebase.auth.GoogleAuthProvider();

//We want to always trigger, google popup, whenever we use Google Auth Provider for ////Authentication and Sign in
provider.setCustomParameters({ prompt: "select_account" });

//Since we are only using Google and 'signInWithPopup()' uses different signInPopups ///and we are using the Google and 'provider' lets it happen.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSSIW0rLkMu8zvgvx1IVk73i19mx0Fy64",
  authDomain: "crwn-db-6bdf0.firebaseapp.com",
  databaseURL: "https://crwn-db-6bdf0.firebaseio.com",
  projectId: "crwn-db-6bdf0",
  storageBucket: "crwn-db-6bdf0.appspot.com",
  messagingSenderId: "1018457301909",
  appId: "1:1018457301909:web:052ace0290f917d81c4c9c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA5m_QnpzrcX3KgJ09D3gLhzay6KveZWqw",
  authDomain: "oneclickpick-fe1f3.firebaseapp.com",
  projectId: "oneclickpick-fe1f3",
  storageBucket: "oneclickpick-fe1f3.appspot.com",
  messagingSenderId: "372490993519",
  appId: "1:372490993519:web:d26d78a55490f074e1329a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
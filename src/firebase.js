import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY2505Bb2icOnSlBuxpcZNyDhAU4YJqKQ",
  authDomain: "resume-cleverabhi.firebaseapp.com",
  databaseURL: "https://resume-cleverabhi.firebaseio.com",
  projectId: "resume-cleverabhi",
  storageBucket: "resume-cleverabhi.appspot.com",
  messagingSenderId: "1006402775062",
  appId: "1:1006402775062:web:cb69caffeaf016bec06d37",
  measurementId: "G-E21E1K2710",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

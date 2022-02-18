import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsKV4sGp8n6j0CLh2tHGbYahA3rDOTATM",
    authDomain: "list-yt-71019.firebaseapp.com",
    projectId: "list-yt-71019",
    storageBucket: "list-yt-71019.appspot.com",
    messagingSenderId: "1096599023481",
    appId: "1:1096599023481:web:81116805971480dbc349a8"
  };
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();


export { auth, storage, db };


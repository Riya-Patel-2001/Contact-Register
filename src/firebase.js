import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvajC4vbbrMKV64IJXDYDeHacgVQzc9kU",
  authDomain: "react-crud-2975c.firebaseapp.com",
  databaseURL: "https://react-crud-2975c-default-rtdb.firebaseio.com",
  projectId: "react-crud-2975c",
  storageBucket: "react-crud-2975c.appspot.com",
  messagingSenderId: "767346469316",
  appId: "1:767346469316:web:d29a4a3c20f93eb2bddc91",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

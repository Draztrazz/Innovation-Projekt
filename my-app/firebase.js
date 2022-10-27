// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB31xQZYWZ8XSVsRGHR31zg4OcmLa6gxw4",
  authDomain: "innovation-projekt-a45af.firebaseapp.com",
  projectId: "innovation-projekt-a45af",
  storageBucket: "innovation-projekt-a45af.appspot.com",
  messagingSenderId: "931054499640",
  appId: "1:931054499640:web:c079bed2cb98effd72b3cd"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

const db  = firebase.firestore();

export { auth, db };
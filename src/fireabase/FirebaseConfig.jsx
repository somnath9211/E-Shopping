// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkK5ep2NM0HFKQtGl4q_LGkl5sTsfMaSA",
  authDomain: "e-shopping-796a2.firebaseapp.com",
  projectId: "e-shopping-796a2",
  storageBucket: "e-shopping-796a2.appspot.com",
  messagingSenderId: "232886545679",
  appId: "1:232886545679:web:079f19a36931589128627a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };

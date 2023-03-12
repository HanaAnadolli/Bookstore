import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD7hIkhy0RtwpADiJNl_tBX3GTA8bDqqDM",
  authDomain: "bookstore-vuejs3.firebaseapp.com",
  projectId: "bookstore-vuejs3",
  storageBucket: "bookstore-vuejs3.appspot.com",
  messagingSenderId: "961991959701",
  appId: "1:961991959701:web:c285f23fcba14fc7e7279c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }
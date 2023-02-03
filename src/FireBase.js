
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAT9ZRypplb-gg5j48dXEhUdb38nNJbKPM",
  authDomain: "myfirstfirebase-4da18.firebaseapp.com",
  projectId: "myfirstfirebase-4da18",
  storageBucket: "myfirstfirebase-4da18.appspot.com",
  messagingSenderId: "326763869942",
  appId: "1:326763869942:web:f380d784a2b2240f0bded7"
};


 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();
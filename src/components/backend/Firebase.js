
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBDF9SZWWN9uwgt-Zx7LLqsq95IoLHsA6Q",
  authDomain: "nationalcash.firebaseapp.com",
  projectId: "nationalcash",
  storageBucket: "nationalcash.appspot.com",
  messagingSenderId: "936217324835",
  appId: "1:936217324835:web:1a863023e9268f85fd7096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const storage = getStorage(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "kogi-province7.firebaseapp.com",
  projectId: "kogi-province7",
  storageBucket: "kogi-province7.appspot.com",
  messagingSenderId: "1039415967468",
  appId: "1:1039415967468:web:6cc2e6ff18b7a6e2462fc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



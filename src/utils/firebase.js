
import { initializeApp } from "firebase/app";

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



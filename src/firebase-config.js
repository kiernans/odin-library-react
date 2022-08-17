// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZJGcMotUALmD76X6ojzZ_NQJL48FYTMQ",
  authDomain: "my-library-d838a.firebaseapp.com",
  projectId: "my-library-d838a",
  storageBucket: "my-library-d838a.appspot.com",
  messagingSenderId: "915343912456",
  appId: "1:915343912456:web:c5fbc92c9f6b52a7c1ebbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
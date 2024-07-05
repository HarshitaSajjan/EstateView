// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYP2N-pYvu64kTi56zmj_c3BMjiMS_y44",
    authDomain: "estateview-4d7c8.firebaseapp.com",
  projectId: "estateview-4d7c8",
  storageBucket: "estateview-4d7c8.appspot.com",
  messagingSenderId: "824607543777",
  appId: "1:824607543777:web:9235ef0ae487e5318882a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};

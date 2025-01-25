// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCndt7x5BYv2T9ueba0yAZeUC11v7Ba-ug",
    authDomain: "marathon-manage-system.firebaseapp.com",
    projectId: "marathon-manage-system",
    storageBucket: "marathon-manage-system.firebasestorage.app",
    messagingSenderId: "850094527884",
    appId: "1:850094527884:web:4f312d051a8485c33af2a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth=getAuth(app);
export default app;
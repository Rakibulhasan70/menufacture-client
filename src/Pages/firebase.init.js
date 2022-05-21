// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcZPRUjbbNq1KExhGw8ORwCyyh3jsx5Tk",
    authDomain: "assignment-12-client-c7d17.firebaseapp.com",
    projectId: "assignment-12-client-c7d17",
    storageBucket: "assignment-12-client-c7d17.appspot.com",
    messagingSenderId: "562735346223",
    appId: "1:562735346223:web:33d71129032400a64e8cda"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
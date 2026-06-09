
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-73b54.firebaseapp.com",
  projectId: "examnotesai-73b54",
  storageBucket: "examnotesai-73b54.firebasestorage.app",
  messagingSenderId: "377982131927",
  appId: "1:377982131927:web:0e36eb606ea63b25c55a92"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
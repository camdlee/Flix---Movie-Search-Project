// ===================== IMPORTS =======================
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1g_4e-7MNod9kWURqu44L6JvkJMzSKUQ",
  authDomain: "star-wars-capstone.firebaseapp.com",
  projectId: "star-wars-capstone",
  storageBucket: "star-wars-capstone.appspot.com",
  messagingSenderId: "681016888043",
  appId: "1:681016888043:web:eec2aecefdeded877eccae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initializing database connection and exporting for use in other files
export const db = getFirestore(app);


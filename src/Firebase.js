
// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpAippicox04srNCQnxJvE3hzL8q9NPj0",
  authDomain: "netflix-clone-38081.firebaseapp.com",
  projectId: "netflix-clone-38081",
  storageBucket: "netflix-clone-38081.appspot.com", // Corrected storageBucket domain
  messagingSenderId: "946448685051",
  appId: "1:946448685051:web:032a70d73b00af1a26dd5e",
  measurementId: "G-SRJHSL8HQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

// Sign Up Function
const signUp = async (name, email, password) => {
  try {
    // Create user in Firebase Authentication
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user details to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User signed up successfully!");
    return user; // Return user details for further use
  } catch (error) {
    console.error("Error signing up:", error);
    alert(error.message);
  }
};

// Login Function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
    console.error("Error logging in:", error);
    alert("error.message");
  }
};

// Logout Function
const Logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully!");
  } catch (error) {
    console.error("Error logging out:", error);
    alert(error.message);
  }
};

// Export functions and Firebase instances
export { auth, login, Logout, signUp, db };

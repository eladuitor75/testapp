// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBZnRK8vPEfULy4-gA4JB-ZbTRMl0qd74I",
  authDomain: "apptest-d134c.firebaseapp.com",
  databaseURL: "https://apptest-d134c-default-rtdb.firebaseio.com",
  projectId: "apptest-d134c",
  storageBucket: "apptest-d134c.appspot.com",
  messagingSenderId: "263377695198",
  appId: "1:263377695198:web:b9f22d6625c54f295ded4f",
  measurementId: "G-MLECT3WS8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};

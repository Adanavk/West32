import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHfRyWmEbSYFHmG6YRF2P5aWDNf7jFHB8",
  authDomain: "project-3679881719439917630.firebaseapp.com",
  databaseURL: "https://project-3679881719439917630-default-rtdb.firebaseio.com",
  projectId: "project-3679881719439917630",
  storageBucket: "project-3679881719439917630.appspot.com",
  messagingSenderId: "486538558666",
  appId: "1:486538558666:web:3fd11ebc279e13f3408833",
  measurementId: "G-70ZTVGKRF2"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
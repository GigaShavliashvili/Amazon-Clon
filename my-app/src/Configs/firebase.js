import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBI4Zp9k4TBD5IH5YIDRUun0ZzFaGgkIP0",
  authDomain: "socialapp-26a7d.firebaseapp.com",
  databaseURL: "https://socialapp-26a7d-default-rtdb.firebaseio.com",
  projectId: "socialapp-26a7d",
  storageBucket: "socialapp-26a7d.appspot.com",
  messagingSenderId: "674642745112",
  appId: "1:674642745112:web:b196e81028e3b0144a306d",
};

const app = initializeApp(firebaseConfig);

/* const db = getFirestore(app); */
const auth = getAuth(app);

export { auth };

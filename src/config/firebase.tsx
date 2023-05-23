import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWq6-Z5ei4MguYX9zxTCF5jlIArRCYxmw",
  authDomain: "exam-organizer-5036e.firebaseapp.com",
  projectId: "exam-organizer-5036e",
  storageBucket: "exam-organizer-5036e.appspot.com",
  messagingSenderId: "23872512450",
  appId: "1:23872512450:web:01189e3ac9086a6204f65b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
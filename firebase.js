import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjs2TfeicD96a6-Hfcrn7Zv1foZIwbIdk",
  authDomain: "twitter-clone-62aee.firebaseapp.com",
  projectId: "twitter-clone-62aee",
  storageBucket: "twitter-clone-62aee.appspot.com",
  messagingSenderId: "580246122506",
  appId: "1:580246122506:web:3d1ff8c9f35324f465eff3",
  measurementId: "G-5662B813PW"
};

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const storage = getStorage(); 


export default app;





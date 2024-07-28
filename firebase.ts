import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
import {firebase_API} from "@/firebase_api"

const firebaseConfig = {
    apiKey: firebase_API,
    authDomain: "pdfai-sshresthh.firebaseapp.com",
    projectId: "pdfai-sshresthh",
    storageBucket: "pdfai-sshresthh.appspot.com",
    messagingSenderId: "376560166055",
    appId: "1:376560166055:web:b1987ff1c312a534e82782",
    measurementId: "G-7E9FJD793K"
  };


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {db, storage, analytics};
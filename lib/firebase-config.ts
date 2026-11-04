import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcHn1LdrlDV8AU336IQljD2y0bL3pRlSU",
  authDomain: "mxtmcrypto.firebaseapp.com",
  projectId: "mxtmcrypto",
  storageBucket: "mxtmcrypto.firebasestorage.app",
  messagingSenderId: "1022494471331",
  appId: "1:1022494471331:web:ebb9d626dc132417a2fb16"
};

export const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

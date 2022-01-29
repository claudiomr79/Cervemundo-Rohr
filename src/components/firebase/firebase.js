import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDnCJNx-9lzTdyJLRzLbdYV5pNyv5sM3io",
    authDomain: "cervemundo-febe0.firebaseapp.com",
    projectId: "cervemundo-febe0",
    storageBucket: "cervemundo-febe0.appspot.com",
    messagingSenderId: "844126200996",
    appId: "1:844126200996:web:58b9c3d9c1a77b8e38b231"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
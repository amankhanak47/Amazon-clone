import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB9KhoYGK92mRvvjX8k7LcdB_0aem_Pc1Y",
  authDomain: "clone-a7b1d.firebaseapp.com",
  projectId: "clone-a7b1d",
  storageBucket: "clone-a7b1d.appspot.com",
  messagingSenderId: "749074349535",
  appId: "1:749074349535:web:acce5dead21c67a646186a",
  measurementId: "G-F5CK9XLN7L"
};

const firebaseapp =firebase.initializeApp(firebaseConfig)

const db=firebaseapp.firestore();
const auth=firebase.auth();

export{db,auth}
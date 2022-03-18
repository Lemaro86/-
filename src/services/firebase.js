import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCCj0T9lm5hhoEx_OV4S9jqA5sZk8B-Lk",
  authDomain: "superapp-f8623.firebaseapp.com",
  databaseURL: "https://superapp-f8623-default-rtdb.firebaseio.com",
  projectId: "superapp-f8623",
  storageBucket: "superapp-f8623.appspot.com",
  messagingSenderId: "653787248299",
  appId: "1:653787248299:web:3d64b89cafca00ba2f29ee"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;

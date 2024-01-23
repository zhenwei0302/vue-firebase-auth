import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeMio5bAa1FDpN6Up1Iw6Tm8wbmh_16hk",
  authDomain: "vue-firebase-auth-router.firebaseapp.com",
  projectId: "vue-firebase-auth-router",
  storageBucket: "vue-firebase-auth-router.appspot.com",
  messagingSenderId: "680478012207",
  appId: "1:680478012207:web:38614362cd5b7b9bb927da",
  measurementId: "G-EVZT3YY9G8"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
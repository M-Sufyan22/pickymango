import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyADPUPMMKnVu_Gs5qbrZO91g4mFuCVv_u4",
    authDomain: "pickymango-web.firebaseapp.com",
    projectId: "pickymango-web",
    storageBucket: "pickymango-web.appspot.com",
    messagingSenderId: "156665600796",
    appId: "1:156665600796:web:4f824cc748a585b99138d9",
    measurementId: "G-KXSG2ZM6LC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
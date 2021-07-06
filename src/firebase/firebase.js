import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA34YqkiGI_a68gUKqGAu0mfR6qoPS_zGA",
    authDomain: "accmusicales-31954.firebaseapp.com",
    projectId: "accmusicales-31954",
    storageBucket: "accmusicales-31954.appspot.com",
    messagingSenderId: "206148721027",
    appId: "1:206148721027:web:ae85e0c8d24d78f6fbbeb6"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();
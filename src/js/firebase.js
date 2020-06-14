/**
 * Firebase config
 * @author Dan Levy <danlevy124@gmail.com>
 * @module
 */

import firebase from "firebase/app";
import "firebase/analytics";

// Firebase config object
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initializes Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

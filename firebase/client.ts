// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCB7JmshL7aa8-LqkAv8Wbl1CE0mwCsxNY',
  authDomain: 'prepwise-d569c.firebaseapp.com',
  projectId: 'prepwise-d569c',
  storageBucket: 'prepwise-d569c.firebasestorage.app',
  messagingSenderId: '1003835372567',
  appId: '1:1003835372567:web:5501d0266952b224a7d852',
  measurementId: 'G-0E2Z1NWWNJ',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

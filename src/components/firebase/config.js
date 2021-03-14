import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDiGQAbF3P91rTFd6IOI4F1SA8E6BKuc8w",
    authDomain: "job-listing-5cc44.firebaseapp.com",
    projectId: "job-listing-5cc44",
    storageBucket: "job-listing-5cc44.appspot.com",
    messagingSenderId: "921677056222",
    appId: "1:921677056222:web:630b799fd4a0c3bbc25a4f"
  };
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore()

  export { firebase, firestore, app };

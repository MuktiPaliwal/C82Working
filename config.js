import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAr67Pp6iaSP8kFzLKvheDmQ5xyiMd7wV4",
  authDomain: "booksanta-8528f.firebaseapp.com",
  projectId: "booksanta-8528f",
  storageBucket: "booksanta-8528f.appspot.com",
  messagingSenderId: "900854597513",
  appId: "1:900854597513:web:5046e8374825063abb4358"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();










// WHJ config
/*import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyASyOjOtJla-X-b3io2eLoaUc_bIRFSIIc",
    authDomain: "book-santa-app.firebaseapp.com",
    databaseURL: "https://book-santa-app.firebaseio.com",
    projectId: "book-santa-app",
    storageBucket: "book-santa-app.appspot.com",
    messagingSenderId: "69634746716",
    appId: "1:69634746716:web:6fbbfc110fb4475365f999",
    measurementId: "G-DLB7XC0JPL"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();*/
import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAldXc30v8ptVzDn7PSsVNTBVFIIC6lFvo",
  authDomain: "summa-arya.firebaseapp.com",
  databaseURL: "https://summa-arya.firebaseio.com",
  projectId: "summa-arya",
  storageBucket: "summa-arya.appspot.com",
  messagingSenderId: "582877245974",
  appId: "1:582877245974:web:88f02f7cc49461e6a13b37"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from 'firebase';
// import 'firebase/storage';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFwvJhsw_5Lw3CEaNeiVZwEe9RiIeXQQU",
    authDomain: "photo-gallery-7333b.firebaseapp.com",
    databaseURL: "https://photo-gallery-7333b.firebaseio.com",
    projectId: "photo-gallery-7333b",
    storageBucket: "photo-gallery-7333b.appspot.com",
    messagingSenderId: "584212705085",
    appId: "1:584212705085:web:2a2e40f9fa4b7622f9df54",
    measurementId: "G-3FMJ328XG1"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const storage= firebase.storage();
  const firestore= firebase.firestore();
  const timestamp= firebase.firestore.FieldValue.serverTimestamp

  export {storage,firestore,timestamp};
 import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyBz0ayDj0UeX4Ys2QmKGxZ3CjXsT-Egx-c",
    authDomain: "neptune-9fad7.firebaseapp.com",
    databaseURL: "https://neptune-9fad7.firebaseio.com",
    projectId: "neptune-9fad7",
    storageBucket: "",
    messagingSenderId: "67707719960",
    appId: "1:67707719960:web:5fc025bd72a9d6e9eb0e6d",
    measurementId: "G-YRLEQZKFN5"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default app;
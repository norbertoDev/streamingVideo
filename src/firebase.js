import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyABL11lJs1BTEScQbejAYIlInic8ieRgTU",
    authDomain: "clone-netflix-ada81.firebaseapp.com",
    projectId: "clone-netflix-ada81",
    storageBucket: "clone-netflix-ada81.appspot.com",
    messagingSenderId: "283737309343",
    appId: "1:283737309343:web:c2ae4a4cea5be0701862aa"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

export {auth}
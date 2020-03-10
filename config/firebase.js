import Firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyAhwdTUyD4deNfiewCNEv9J3iB7t08y6Lc",
    authDomain: "get-the-job-creator.firebaseapp.com",
    databaseURL: "https://get-the-job-creator.firebaseio.com",
    projectId: "get-the-job-creator",
    storageBucket: "get-the-job-creator.appspot.com",
    messagingSenderId: "1026006885021",
    appId: "1:1026006885021:web:32d7e81df67bd69d96ea74",
    measurementId: "G-084TSCF8DT"
  };
  // Initialize Firebase
  let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database()
export const auth = app.auth()
export const storage = app.storage()
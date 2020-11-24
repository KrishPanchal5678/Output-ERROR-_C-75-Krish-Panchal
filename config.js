import * as firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBId2L7a3qPGHYx7b8lrmOOCd3MTt6uNKM",
  authDomain: "wily-b58d5.firebaseapp.com",
  databaseURL: "https://wily-b58d5.firebaseio.com",
  projectId: "wily-b58d5",
  storageBucket: "wily-b58d5.appspot.com",
  messagingSenderId: "304866082294",
  appId: "1:304866082294:web:2faecf1bc5a5bea3325bd7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAf43FfqhQRm3QI4Z4IC5K6d88hsZqX6Ls",
    authDomain: "voicecollecter.firebaseapp.com",
    databaseURL: "https://voicecollecter.firebaseio.com",
    projectId: "voicecollecter",
    storageBucket: "voicecollecter.appspot.com",
    messagingSenderId: "425352802069",
    appId: "1:425352802069:web:cb42d31a1875a57578831c",
    measurementId: "G-PF87F89MWE"
  };

  export default firebase.initializeApp(firebaseConfig);
import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/database';


const firebase = !fb.apps.length ? fb.initializeApp({
    apiKey: "AIzaSyAnXzC_5D4upVfFDPDs-xXWTw7SguplYKI",
    authDomain: "culture-zoo.firebaseapp.com",
    projectId: "culture-zoo",
    storageBucket: "culture-zoo.appspot.com",
    messagingSenderId: "654476558715",
    appId: "1:654476558715:web:2caa847924e0054b4ffdde",
    measurementId: "G-21CNBWM2QY"
}) : fb.app()

firebase.firestore().settings({ ignoreUndefinedProperties: true })

export default firebase 

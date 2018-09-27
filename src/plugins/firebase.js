import firebase from 'firebase';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCCAz-_aJLjSVR9-8txyQcujtoYUSBSiv4",
    authDomain: "nudamoskva-nuxt.firebaseapp.com",
    databaseURL: "https://nudamoskva-nuxt.firebaseio.com",
    projectId: "nudamoskva-nuxt",
    storageBucket: "nudamoskva-nuxt.appspot.com",
    messagingSenderId: "426226449873"
  })
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
// const storage = firebase.storage() //if use storage

export { db }
import {
  initializeApp
} from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs
} from "firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth"
const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "trek-hub.firebaseapp.com",
  projectId: "trek-hub",
  storageBucket: "trek-hub.appspot.com",
  messagingSenderId: "708726757858",
  appId: "1:708726757858:web:dccb9fd25fc35e78b881bb"
});

const db = getFirestore();
const auth = getAuth();

module.exports = (req, res) => {
  console.log(req);
  getDocs(collection(db, "events")).then((data) => {
    let dataToReturn = {
      "docs": []
    }
    data.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      dataToReturn.docs.push(doc.data());
    });
    res.json(dataToReturn);
  });
}
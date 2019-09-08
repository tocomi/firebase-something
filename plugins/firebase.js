import firebase from 'firebase'
import 'firebase/firestore'
const firebaseKey = require('../firebaseKey.json')

firebase.initializeApp({ ...firebaseKey })
const db = firebase.firestore()
export { db }

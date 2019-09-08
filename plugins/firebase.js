import firebase from 'firebase'
import 'firebase/firestore'
const firebaseKey = require('../firebaseKey.json')

firebase.initializeApp(...firebaseKey)
const db = firebase.firestore
const setting = { timestampsInSnapshots: true }
db.setting(setting)
export { db }

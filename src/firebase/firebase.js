import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBoRsVDPDlS5JYdoqV4sLuFMpA2bPkbck",
  authDomain: "expensify-4f8b2.firebaseapp.com",
  databaseURL: "https://expensify-4f8b2.firebaseio.com",
  projectId: "expensify-4f8b2",
  storageBucket: "expensify-4f8b2.appspot.com",
  messagingSenderId: "637459752132",
  appId: "1:637459752132:web:92c1e88c03052aab"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
database.ref().set({
  name: "Diego Mendez"
});

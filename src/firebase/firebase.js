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

export {firebase, database as default};


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 109500,
//   createdAt: 23423423432
// });

// database.ref('expenses').push({
//   description: 'phone',
//   note: '',
//   amount: 5900,
//   createdAt: 23423423432
// });

// database.ref('expenses').push({
//   description: 'food',
//   note: '',
//   amount: 109500,
//   createdAt: 23423423432
// });
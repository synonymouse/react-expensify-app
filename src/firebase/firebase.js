import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCZa7sGmrqV0oJWiEqkbnI_7vcAp3n-d4U",
  authDomain: "expensify-763af.firebaseapp.com",
  databaseURL: "https://expensify-763af.firebaseio.com",
  projectId: "expensify-763af",
  storageBucket: "expensify-763af.appspot.com",
  messagingSenderId: "586800180502"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().once()

// database
//   .ref()
//   .set({
//     name: "yel",
//     age: 25,
//     stressLevel: 6,
//     job: {
//       title: "Front-end developer",
//       company: "Google"
//     },
//     location: {
//       city: "Moscow",
//       country: "Russia"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref().remove();

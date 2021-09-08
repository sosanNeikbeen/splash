import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFj0YT7nXDmC1b5oEkBo0xQFNwoK-3Y18",
  authDomain: "image-gallery-ce843.firebaseapp.com",
  projectId: "image-gallery-ce843",
  storageBucket: "image-gallery-ce843.appspot.com",
  messagingSenderId: "271013623090",
  appId: "1:271013623090:web:095b2d00f2d5a6486b132b",
  measurementId: "G-GJE8EYN29Y",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth
//     .signInWithPopup(googleProvider)
//     .then((res) => {
//       console.log(res.user);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };

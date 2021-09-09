import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYXH5QZMK9RiPN9M9hYwwzGiecXNrkIX4",
  authDomain: "splash-809c8.firebaseapp.com",
  projectId: "splash-809c8",
  storageBucket: "splash-809c8.appspot.com",
  messagingSenderId: "221138124191",
  appId: "1:221138124191:web:c0f8a470538870a3edd1aa",
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

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO3rmmy2GwwR0EqCp9ypEsPBJkor5vNEE",
  authDomain: "sign-in-5a346.firebaseapp.com",
  projectId: "sign-in-5a346",
  storageBucket: "sign-in-5a346.appspot.com",
  messagingSenderId: "1028013134239",
  appId: "1:1028013134239:web:6482b6ab6bc30f7e6e6daa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};


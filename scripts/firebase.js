// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore,setDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { signOut, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCPXnWC7cEgJz9fghRTdqWBRoVov_5uKHk",
    authDomain: "comic-de193.firebaseapp.com",
    projectId: "comic-de193",
    storageBucket: "comic-de193.appspot.com",
    messagingSenderId: "374467292594",
    appId: "1:374467292594:web:f10e9a525478ad6b6508ab"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth();

let loggedUser = null

export const createUser = (name, email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      loggedUser = user.uid
      const userDoc = {
        name,
        email,
        id: user.uid
      }
      localStorage.setItem('idUser', user.uid)
  
      setDoc(doc(db, 'users', user.uid), userDoc).then(() => {
        location.href = "main.html";

      })

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorMessage)

    });


    export const checkUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log("Inicie Sesión")
            const user = userCredential.user;
            loggedUser = user.uid
            localStorage.setItem('idUser', user.uid)
            location.href = "main.html";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Verifique el correo o la contraseña")
      
            console.log(errorCode)
      
      
          });
      
      }
  
    export const addChoice = (code,choice) =>{

      const ref = doc(db, 'users', localStorage.getItem('idUser'))
      updateDoc(ref,{
        [code]: choice,
      })
    }
    
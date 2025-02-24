// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

//rebase
const app = initializeApp(firebaseConfig);

const fireDB=getFirestore(app);
const auth=getAuth(app);

export{fireDB,auth}

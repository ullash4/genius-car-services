import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNwiAZQxqvPyR-am5OhhGplQysDHtbV0Y",
  authDomain: "genius-car-services-2936d.firebaseapp.com",
  projectId: "genius-car-services-2936d",
  storageBucket: "genius-car-services-2936d.appspot.com",
  messagingSenderId: "864217093724",
  appId: "1:864217093724:web:73eae60bf627943b907899"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
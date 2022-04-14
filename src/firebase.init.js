import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
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
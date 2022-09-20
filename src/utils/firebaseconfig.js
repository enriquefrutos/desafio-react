// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc, query, where } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8rnx7UDIrEZnI5tj3uetDJ0n6q3IJibc",
  authDomain: "perfumeria-c4a6a.firebaseapp.com",
  projectId: "perfumeria-c4a6a",
  storageBucket: "perfumeria-c4a6a.appspot.com",
  messagingSenderId: "216418511216",
  appId: "1:216418511216:web:af36f73b37ac9cf7fa87b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firestoreFetch = async (id) =>
{  
    let q;
    if(id){
        q = query(collection(db, "products"), where("categoryId","==", id));
    }else{
        q = query(collection(db, 'products'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc =>({
        id: doc.id,
        ...doc.data()
    }))
  return dataFromFirestore
}
export const firestoreOneFetch = async (category) => {
  const docRef = doc(db, "products", category);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};

        }}
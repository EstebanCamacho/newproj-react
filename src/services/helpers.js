import arrayProductos from "../components/Products/Products";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSbXpFtU4agklMjK0amAOch0lxnIzauh0",
  authDomain: "react-project-6023f.firebaseapp.com",
  projectId: "react-project-6023f",
  storageBucket: "react-project-6023f.appspot.com",
  messagingSenderId: "643707345709",
  appId: "1:643707345709:web:e9bed6370571c1012011a4"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
console.log(db);

export async function exportData(){
const productsCollectionRef = collection(db, "products");

for(let item of arrayProductos){
  item.index = item.id;
  delete item.id;
  const res = await addDoc(productsCollectionRef, item);
  console.log("Documento creado:", res.id);  
}
}


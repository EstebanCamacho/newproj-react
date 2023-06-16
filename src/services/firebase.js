import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, writeBatch } from 'firebase/firestore';
import arrayProductos from "../components/Products/Products";

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

export async function getData() {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, orderBy("index"));
    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map((doc) => {
      return { ...doc.data(), id: doc.id }
    });
    return dataDocs;
}

export async function getItemData(idUrl) {
  const docRef = doc(db, "products", idUrl);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getCategoryData(idCategory) {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", idCategory));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id }
  });
  return dataDocs;
}

export async function createOrder(data){
  const ordersCollectionRef = collection(db, "orders");
  const response = await addDoc(ordersCollectionRef, data);
  return response.id;
}

export async function createOrderWithStockUpdate(data){
  const ordersCollectionRef = collection(db, "orders");
  const batch = writeBatch(db);
  const { items } = data;

  for( let itemInCart of items){
    const refDoc = doc(db, "products", itemInCart.id);
    const docSnap = await getDoc(refDoc);
    const { stock } = docSnap.data();
    const stockToUpdate = stock - itemInCart.count;
    if (stockToUpdate < 0){
      throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
    }
    else{
      const docRef = doc(db, "products", itemInCart.id);
      batch.update(docRef, { stock: stockToUpdate });
    }
  }
  
await batch.commit();

const response = await addDoc(ordersCollectionRef, data);
return response.id;
}

export async function exportDataWithBatch(){
  const batch = writeBatch(db);
  const collectionRef = collection(db, "products");
  
  for(let item of arrayProductos){
    item.index = item.id;
    delete item.id;
    const docRef = doc(collectionRef);
    batch.set(docRef, item);
  }

  await batch.commit();
  console.log("Items Exportados")
  }

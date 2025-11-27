import { db } from "../data/data.js";
import { doc, getDoc, collection, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

export async function obtenerProductos(){
    
    const datos = [];
    return new Promise(async (resolve, reject)=>{
      try{
        const querySnapshot = await getDocs(collection(db, "products"));
      
        querySnapshot.forEach((doc) => {
      
            const data = doc.data();

            const productoConId = {
                id: doc.id,
                ...data
            };

            // 3. Añadimos el objeto completo al array de resultados.
            datos.push(productoConId);
            resolve(datos);
        });
      }
      catch(error){
        reject(error);
      }
    }) 
}

export async function obtenerProducto(id){
  return new Promise(async (resolve, reject)=>{
      try{
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          const productoConId = {
              id: docSnap.id,
              ...data
          };
        resolve(productoConId);
        } else {
          resolve();
          // docSnap.data() will be undefined in this case
          //console.log("No such document!");
        }
      }
      catch(error){
          reject(error);
      }
    })
}

export function agregarProducto(producto){
  return(
    new Promise(async (resolve, reject) => {
        try{
          const docRef = await addDoc(collection(db, "products"), producto);
          resolve({...producto, id: docRef.id})
        }catch(error){
          reject(error)
        }
    })
  )
}
/*
export function actualizarProducto(producto){
  return(
    new Promise(async (resolve, reject) => {
      try{
        await updateDoc(doc(db, "products", producto.id), {
          precio: producto.precio
        })
        resolve()
      }catch(error){
        reject(error)
      }
    })
  )
}
*/
export async function borrarProducto(id){
  return new Promise(async (resolve, reject)=>{
      try{
        await deleteDoc(doc(db, "products", id));
        resolve()
      }catch(error){
        reject(error)
      }
    })
}
import {
  obtenerProductos,
  obtenerProducto,
  agregarProducto,
  borrarProducto,
  //actualizarProducto,

} from "../models/products.models.js"

export const getAllProductsService = async () => {
  return(
    new Promise(async (resolve,reject)=> {
      try{
        const products = await obtenerProductos()
        resolve(products);
      }catch(error){
        reject(error);
      }
    })
)};

export const getProductByIdService = async (id) => {
  return(
    new Promise(async (resolve,reject)=> {
      try{
        const product = await obtenerProducto(id)
        //resolve(products.find(product => product.id == id));
        resolve(product);
      }catch(error){
        reject(error);
      }
    })  
)};

export const addProductService = async (producto) => {
  return(
    new Promise(async (resolve,reject)=> {
      try{
        await agregarProducto(producto)
        resolve();
      }catch(error){
        reject(error);
      }
    })  
)};
/*
export const updateProductService = async (producto) => {
  return(
    new Promise(async (resolve,reject)=> {
      try{
        await actualizarProducto(producto)
        resolve();
      }catch(error){
        reject(error);
      }
    })  
)};*/

export const deleteProductByIdService = async (id) => {
  return(
    new Promise(async (resolve,reject)=> {
      try{
        await borrarProducto(id);
        resolve();
      }catch(error){
        reject(error);
      }
    })  
)};
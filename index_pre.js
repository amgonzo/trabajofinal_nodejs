import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "./api.js";


const arg = process.argv.slice(2)
//console.log(arg)

if (arg == undefined)
{
    console.log("sin argumentos validos");
    exit;
}

 //Get todos los productos o uno solo
if(arg[0] == "GET"){
    const arg1 = arg[1].split('/');
    const cantarg1 = arg1.length;
    
    if(cantarg1 > 0)
    {
        if(arg1[0] == "products" && cantarg1 == 1)
        {
            console.log("todos los productos");
            await obtenerProductos();
        }
        if(arg1[0] == "products" && cantarg1 == 2)
        {
            //console.log("El priducto " + arg1[1] + " es el solicitado");
            await obtenerProducto(arg1[1]);
        }
        if(arg1[0] != "products" || cantarg1 > 2)
        {
            console.log("error falta argumento products");
        }

    }
    else{console.log("error GET falta argumento products")}
}

//POST crear un producto
if(arg[0] == "POST"){    
    const cantarg = arg.length;
    
    if(cantarg > 1)
    {
        if(arg[1] == "products" && cantarg == 7)
        {
            //console.log("Se agrego el producto");
            
            const imgs = [];
            imgs.push(arg[6]);

            const producto = {
                "title": arg[2],
                "price": arg[3],
                "description": arg[4],
                "categoryId": arg[5],
                "images": imgs
            }
            await agregarProducto(producto);
        }
        else
        {
            console.log("datos del producto incompletos");
        }
    }
    else
        {
            console.log("error POST falta argumento products");
        }
}

//DELETE eliminar un producto
if(arg[0] == "DELETE"){    
    const arg1 = arg[1].split('/');
    const cantarg1 = arg1.length;
    
    if(cantarg1 > 0)
    {
        if(arg1[0] == "products" && cantarg1 == 2)
        {
            //console.log("El priducto " + arg1[1] + " fue borrado con exito");
            await eliminarProducto(arg1[1]);
        }
        if(arg1[0] != "products" || cantarg1 != 2)
        {
            console.log("error mal argumento products");
        }

    }
    else{console.log("error DELETE argumento products")}
}
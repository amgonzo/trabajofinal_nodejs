const url = "https://api.escuelajs.co/api/v1/products"

export async function obtenerProductos () {
    try{   
        const response = await fetch(url,{
            method: "GET"
        }).then(async (response) => {
            if(response.status == 200)
            {
        const data = await response.json()
        console.log("read-products", data)
            }
            else
            {
                console.log("No hay datos");
            }
    })

    }catch(error){
        console.log(error)
    }
}

export async function obtenerProducto(id) {
    try{
        const response = await fetch(`${url}/${id}`,{
            method: "GET"
        }).then(async (response) => {
            if(response.status == 200)
            {
                console.log("El priducto " + id + " es el solicitado");
                const data = await response.json();
                console.log(data);}
            else
            {console.log("Producto no encontrado");}
        })

        //const data = await response.json()

        //console.log("read-product", data)
    }catch(error){
        console.log(error)
    }
}

export async function agregarProducto(producto) {
    try{
        const response = await fetch(url, {
            method: "POST",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        }).then(async (response) => {
            if(response.status == 200)
            {
                console.log("Se agrego el producto");
                const data = await response.json();
                console.log("add-product", data)
            }
            else
            {
                console.log("Error al agregar el producto");
            }
})
    }catch(error){
        console.log(error)
    }
}

export async function eliminarProducto(id) {
    try{
        const response = await fetch(`${url}/${id}`,{
            method: "DELETE"
        }).then(async (response) => {
            if(response.status == 200)
            {
        console.log("El priducto " + id + " fue borrado con exito");
        const data = await response.json()
        console.log("delete-product", data)}
        else
            {
                console.log("Error al borrar el producto");
            }
            })
    }catch(error){
        console.log(error)
    }
}
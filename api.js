const url = "https://api.escuelajs.co/api/v1/products"
export async function obtenerProductos () {
    try{   
        const response = await fetch(url,{
            method: "GET"
        })

        const data = await response.json()
        console.log("read-products", data)

    }catch(error){
        console.log(error)
    }
}

export async function obtenerProducto(id) {
    try{
        const response = await fetch(`${url}/${id}`,{
            method: "GET"
        })

        const data = await response.json()
        console.log("read-product", data)
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
        })

        const data = await response.json()
        console.log("add-product", data)
    }catch(error){
        console.log(error)
    }
}

export async function eliminarProducto(id) {
    try{
        const response = await fetch(`${url}/${id}`,{
            method: "DELETE"
        })
        const data = await response.json()
        console.log("delete-product", data)
    }catch(error){
        console.log(error)
    }
}
import * as productService from "../services/products.services.js"

export const getAllProducts = async (req, res) => {
    try{
        const products = await productService.getAllProductsService()
        res.status(200).json(products);
    }catch(error){
        res.status(500).send()
    }
};

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            const product = await productService.getProductByIdService(id)
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }
};

export const deleteProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            await productService.deleteProductByIdService(id)
            res.status(200).send()
        }else{
            res.status(404).json(error)
        }
    }catch(error){
        res.status(500).send()
    }
};

export const addProduct = async (req, res) => {
    try{
        const { categoria, nombre, precio } = req.body; 
        if (categoria && nombre && precio){
            const product = {
            categoria: categoria,
            nombre: nombre,
            precio: precio
          };
            await productService.addProductService(product);      
            res.status(200).json(product);
        }else{
            res.status(400);
        }
    }catch(error){
        res.status(500).send()
    }
};


export const updateProduct = async (req, res) => {
    try{
        const { id, categoria, nombre, precio } = req.body; 
        if (id && categoria && nombre && precio){
            const product = {
            id: id,
            categoria: categoria,
            nombre: nombre,
            precio: precio
          };
            await productService.updateProductService(product);      
            res.status(200).json(product);
        }else{
            res.status(400).send();
        }
    }catch(error){
        res.status(500).send()
    }
};
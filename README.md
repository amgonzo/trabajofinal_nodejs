url = "https://api.escuelajs.co/api/v1/products"

Obtener todos los productos

npm run start GET products 

Agregar un producto

npm run start POST products titulo200 200 descripcion200 1 https://placehold.co/600x400

Obtener el producto agregado, reemplazar el {id} por el numero correspondiente

npm run start GET products/{id} reemplazar id con el id del producto anterior muestra el producto agregado

Borrar un producto, reemplazar el {id} por el numero correspondiente

npm run start DELETE products/{id} reemplazar id con el id del producto anterior borra el producto y si volves al comando anterior ya no esta el producto
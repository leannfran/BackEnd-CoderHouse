class ProductManager {
    constructor() {
        this.products = [];
    }
    //metodo 1 agregar productos
    addProduct(title, description, price, thumbnail, code, stock) {
        //validacion de campos

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`es nesesario agregar todos los campos`)
            return
        }
        //validacion de code
        
        if (this.products.some(prod => prod.code === code)) {
            console.log(`el valor code: ${code} ya existe!`);
            return
        } else {
            const id = this.products.length + 1; //id autoincrementtable
            const product = {
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product)
            console.log(`${product.title} fue agregado con exito!`);
        }
    }
    getProducts(){
        console.log(this.products);
    }
    getProductById(prodId){  
       const product = this.products.find((p) => p.id === prodId )
       if(product){
           console.log(` se a encontrado un producto con el id ingresado y es `)
           console.log(product);
        }
       else{
           console.error(`not found`);
       } 
    }
}

const pm = new ProductManager
//agrego producto
pm.addProduct(
    'Producto 1',
    'Descripción del producto 1',
    10.99,
    'https://www.example.com/producto1.jpg',
    'P001',
    5
)
//agrego producto con mismo code
pm.addProduct(
    'Producto 2',
    'Descripción del producto 1',
    10.99,
    'https://www.example.com/producto1.jpg',
    'P001',
    5
)
//agrego producto sin un campo
pm.addProduct(
    'Producto 2',
    'Descripción del producto 1',
    10.99,
    'https://www.example.com/producto1.jpg',
    'P002',
)
//agrego otro producto
pm.addProduct(
    'Producto 2',
    'Descripción del producto 2',
    10.99,
    'https://www.example.com/producto1.jpg',
    'P003',
    5
)
//obtengo productos
pm.getProducts()
//busco producto por id 
pm.getProductById(2)
//busco producto por id incorrecto
pm.getProductById(4)

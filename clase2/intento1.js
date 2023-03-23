/** Desafio entregable 
 * consigna
 * realizar una clase Product Manager que gestione un conjunto de productos
 * -debe crearse desde su constructor con el elemento products, el cual sera un array vacio []
 * -cada producto debe tener las propiedades:
 * title/description/price/thumbnail/code/stock
 * 
 * -Metodo AddProduct
 * -validar que no se repita el campo code y que todos los campos sean obligatorios.
 * -al agregarlo debe crearse con un id autoincrementabble
 * 
 * - listo/////Metodo getProducts el cual debe devolver el arreglo con todos los productos creados hasta ese momento 
 * 
 * -Metodo getProductoById debe buscar el id que le pasamos en el array y si no encuentra mostrar un console.error not found
 * 
 */

class ProductManager {
    constructor(){
        this.products = [];
    };
    getProducts(){
        console.log(this.products);
    };
    //metodo add product
    addProduct(title, description, price, thumbnail, code, stock){
        
        const id = this.products.length + 1;

        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if(!product.title || !product.description || !product.id || !product.stock || !product.code ||product.price || !product.thumbnail ){//este no
            console.error('deben introducirse todos los campos');
            return
        }
        const validator = this.products.find(e => e.code === code)
        if(validator){
            console.log(`el codigo ${code} no puede repetirse`);//este anda
            return
        } else{ 
               this.products.push(product);
               console.log(`el producto ${title} fue agregado correctamente`);            
        }
    }
    
};

const productManager = new ProductManager;
productManager.addProduct("remera","remera de algodon puro talle xl",4500,"https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp",1234,20)
productManager.getProducts()


class ProductManager {
    constructor() {
        this.products = [];
    };
    getProducts() {
        console.log(this.products);
    };
    //metodo add product
    addProduct(title, description, price, thumbnail, code, stock) {
        // validación de campos obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error('Debe completar todos los campos.');
            return;
        }
        // validación de campo code
        if (this.products.some((prod) => prod.code === code)) {
            console.error(`El producto con code ${code} ya existe.`);
            return;
        } else {
            const product = {
                id: this.id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
            };
            this.products.push(product);
            console.log(`Producto ${title} con Id: ${this.id} agregado con éxito`);
            this.id++; // incrementar el contador de id para el próximo producto
        }

    }

    getProducts(){
        console.log(this.products);
    }

};

const productManager = new ProductManager;
productManager.addProduct("remera", "remera de algodon puro talle xl", 4500, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp", 1234, 20)
productManager.addProduct("remera de algodon puro talle xl", 4500, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp", 12334, 20)
productManager.addProduct("remera", "remera de algodon puro talle xl", 4500, "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp", 123334, 20)

productManager.getProducts()


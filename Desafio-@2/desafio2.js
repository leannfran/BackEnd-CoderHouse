//al trabajo anterior lo que hay que hacer es sumarle fs,

import * as fs from 'fs'
import { title } from 'process';

// hay que guardar todo lo del array products en un archivo txt o json
class ProductManager {
    constructor() {
        this.products = [];
        this.path = './products.json';
    }

    // 
    async loadData() {
        try {
            const data = await fs.promises.readFile(this.path, 'utf-8')
            const products = JSON.parse(data)
            this.products = products;

        } catch (error) {
            console.error(`Error al cargar los datos del archivo: ${error}`);
        }
    }

    async saveData() {
        try {
            const data = JSON.stringify(this.products, null, 2);
            //  await fs.writeFile(this.path, data, 'utf-8');
            await fs.promises.writeFile(this.path, data, 'utf-8')
            console.log('los datos fueron guardados correctamente');

        } catch (error) {
            console.log('erro al guardar los datos');
        }
    }

    //metodo 1 agregar productos
    async addProduct(title, description, price, thumbnail, code, stock) {
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
            await this.saveData()
            console.log(`${product.title} fue agregado con exito!`);
        }
    }
    //metodo 2 obetener productos

    async getProducts() {
        await this.loadData()
        console.log(this.products);
    }
    //metodo 3 obtener productos x id

    async getProductById(prodId) {
        await this.loadData()
        const product = this.products.find((p) => p.id === prodId)
        if (product) {
            console.log(` se a encontrado un producto con el id ingresado y es `)
            console.log(product);
        }
        else {
            console.error(`not found`);
        }
    }
    //metodo 4 eliminar productos
    async deleteProduct(prodId) {
        try {
          await this.loadData()
          const productIndex = this.products.findIndex(p => p.id === prodId)
    
          if (productIndex === -1) {
            console.error(`No se encontró ningún producto con el ID ${prodId}.`)
            return
          }
    
          this.products.splice(productIndex, 1)
          await this.saveData()
          console.log(`El producto con el ID ${prodId} fue eliminado correctamente.`)
        } catch (error) {
          console.error( error)//no enteindo el error
        }
      }
      

    //metodo 5 actualizar productos

    updateProduct(prodId, { title, description, price, thumbnail, code, stock }) {
        const productIndex = this.products.findIndex((product) => product.id === prodId);
        if (productIndex === -1) {
          console.error('Product not found');
          return;
        }
        const product = this.products[productIndex];
        if (title) product.title = title;
        if (description) product.description = description;
        if (price) product.price = price;
        if (thumbnail) product.thumbnail = thumbnail;
        if (code) product.code = code;
        if (stock) product.stock = stock;
        this.saveData();
        console.log('Producto updated exitosamente');
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
/* pm.addProduct(
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
    */
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
//busco producto por id pm.getProductById(2)
//busco producto por id incorrecto pm.getProductById(4)
//agrego otro
pm.addProduct(
    'Producto 3',
    'Descripción del producto 3',
    10.99,
    'https://www.example.com/producto3.jpg',
    'P004',
    5
    )
    //loborro
    
    pm.getProducts()

    pm.updateProduct(2, { 
        title: 'Nuevo título', 
        description: 'Nueva descripción', 
        price: 25.99, 
        thumbnail: 'https://www.example.com/nuevo-producto.jpg',
        code: 'N001',
        stock: 5
      });

    pm.deleteProduct(3)
      


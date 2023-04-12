const fs = require('fs');

class ProductManager {
  constructor() {
    this.products = [];
    this.path = './products.json';
  }

  async loadData() {
    try {
      const data = await fs.promises.readFile(this.path, 'utf-8');
      const products = JSON.parse(data);
      this.products = products;
    } catch (error) {
      console.error(`Error al cargar los datos del archivo: ${error}`);
    }
  }

  async saveData() {
    try {
      const data = JSON.stringify(this.products, null, 2);
      await fs.promises.writeFile(this.path, data, 'utf-8');
      console.log('los datos fueron guardados correctamente');
    } catch (error) {
      console.log('erro al guardar los datos');
    }
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log(`Es necesario agregar todos los campos`);
      return;
    }

    if (this.products.some(prod => prod.code === code)) {
      console.log(`El valor code: ${code} ya existe!`);
      return;
    }

    const id = this.products.length + 1;
    const product = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    await this.saveData();
    console.log(`${product.title} fue agregado con exito!`);
  }

  async getProducts() {
    await this.loadData();
    console.log(this.products);
  }

  async getProductById(prodId) {
    await this.loadData();
    const product = this.products.find((p) => p.id === prodId);
    if (product) {
      console.log(`Se ha encontrado un producto con el ID ingresado y es:`);
      console.log(product);
    } else {
      console.error(`Not found`);
    }
  }

  async deleteProduct(prodId) {
    try {
      await this.loadData();
      const productIndex = this.products.findIndex(p => p.id === prodId);

      if (productIndex === -1) {
        console.error(`No se encontró ningún producto con el ID ${prodId}.`);
        return;
      }

      this.products.splice(productIndex, 1);
      await this.saveData();
      console.log(`El producto con el ID ${prodId} fue eliminado correctamente.`);
    } catch (error) {
      console.error(error);
    }
  }

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
    console.log('Producto actualizado exitosamente');
  }
}

module.exports = {
  ProductManager,
};

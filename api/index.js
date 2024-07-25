import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:4000' });

function fetchProducts() {
  return instance.get('/products');
}

function fetchProductById(id) {
  return instance.get(`products/${id}`);
}

function createCartItem({ id, name, price, imageUrl }) {
  return instance.post('/carts', {
    id,
    name,
    price,
    imageUrl,
  });
}

export { fetchProducts, fetchProductById, createCartItem };

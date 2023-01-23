import axios from 'axios';

export const getProducts = async () => {
  const { data } = await axios.get('https://efuktshirts.com/products.json');
  return data.products;
};
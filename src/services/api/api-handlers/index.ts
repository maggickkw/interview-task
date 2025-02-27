import {client} from '../api-client';
import {
  categoryEndpoint,
  popularItemsEndpoint,
  productsEndpoint,
} from '../api-endpoints';


//get all categories
export const getCategories = async () => {
  return await client(`${categoryEndpoint}`, {method: 'GET'});
};


//get single category by id
export const getCategory = async ({categoryId}: {categoryId: number}) => {
  return await client(`${categoryEndpoint}/${categoryId}`, {method: 'GET'});
};


//get all popular items
export const getPopularItems = async () => {
  return await client(`${popularItemsEndpoint}`, {method: 'GET'});
};


//get all products
export const getProducts = async () => {
  return await client(`${productsEndpoint}`, {method: 'GET'});
};


//get single product by id
export const getProduct = async ({productId}: {productId: number}) => {
  return await client(`${productsEndpoint}/${productId}`, {method: 'GET'});
};

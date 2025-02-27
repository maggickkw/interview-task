import {useQuery} from '@tanstack/react-query';
import {
  getCategories,
  getCategory,
  getPopularItems,
  getProduct,
  getProducts,
} from '../api/api-handlers';

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};

export const useGetCategory = ({categoryId}: {categoryId: number}) => {
  return useQuery({
    queryKey: ['category',categoryId],
    queryFn: () => getCategory({categoryId}),
    enabled: !!categoryId,
  });
};

export const useGetPopularItems = () => {
  return useQuery({
    queryKey: ['pupular'],
    queryFn: getPopularItems,
  });
};


export const useGetProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};


export const useGetProduct = ({productId}:{productId:number}) => {
  return useQuery({
    queryKey: ['product',productId],
    queryFn: ()=>getProduct({productId}),
    enabled:!!productId
  });
};

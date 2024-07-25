import { defineStore } from 'pinia';
import { useMutation } from '@vue/apollo-composable';
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../graphql/queries';
import apolloClient from '../apollo-client';

export const useProductsStore = defineStore('products', {
  actions: {
    async addProduct(name, price, categoryId) {
      try {
        await useMutation(ADD_PRODUCT, { variables: { name, price, categoryId } }, apolloClient);
      } catch (error) {
        console.error(error);
      }
    },
    async updateProduct(id, name, price) {
      try {
        await useMutation(UPDATE_PRODUCT, { variables: { id, name, price } }, apolloClient);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        await useMutation(DELETE_PRODUCT, { variables: { id } }, apolloClient);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

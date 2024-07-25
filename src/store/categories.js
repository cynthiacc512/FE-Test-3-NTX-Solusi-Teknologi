import { defineStore } from 'pinia';
import { useQuery, useMutation } from '@vue/apollo-composable';
import { GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../graphql/queries';
import apolloClient from '../apollo-client';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
    loading: false,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true;
      try {
        const { result } = await useQuery(GET_CATEGORIES, {}, apolloClient);
        this.categories = result.value.data.categories;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async addCategory(name, parentId) {
      try {
        await useMutation(ADD_CATEGORY, { variables: { name, parentId } }, apolloClient);
        this.fetchCategories();
      } catch (error) {
        console.error(error);
      }
    },
    async updateCategory(id, name) {
      try {
        await useMutation(UPDATE_CATEGORY, { variables: { id, name } }, apolloClient);
        this.fetchCategories();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCategory(id) {
      try {
        await useMutation(DELETE_CATEGORY, { variables: { id } }, apolloClient);
        this.fetchCategories();
      } catch (error) {
        console.error(error);
      }
    },
  },
});

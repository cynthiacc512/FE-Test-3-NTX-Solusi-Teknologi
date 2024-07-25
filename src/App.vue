<template>
  <div id="app">
    <h1>Product Management</h1>
    <CategoryList :categories="categories" />
    <button @click="addCategory()">Add Category</button>
    <button @click="addProduct()">Add Product</button>
  </div>
</template>

<script>
import { useCategoriesStore } from '@/store/categories';
import CategoryList from './components/CategoryList.vue';

export default {
  name: 'App',
  components: {
    CategoryList,
  },
  setup() {
    const categoriesStore = useCategoriesStore();
    categoriesStore.fetchCategories();

    const addCategory = () => {
      // Open modal or navigate to add category page
    };

    const addProduct = () => {
      // Open modal or navigate to add product page
    };

    return {
      categories: categoriesStore.categories,
      addCategory,
      addProduct,
    };
  },
};
</script>

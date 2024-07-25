<template>
    <div class="product-item">
      <h3>{{ product.name }}</h3>
      <p>Price: ${{ product.price.toFixed(2) }}</p>
      <button @click="editProduct">Edit</button>
      <button @click="deleteProduct">Delete</button>
    </div>
  </template>
  
  <script>
  import { useProductsStore } from '@/store/products'; // Adjust the path as needed
  
  export default {
    props: {
      product: Object
    },
    setup(props) {
      const productsStore = useProductsStore();
  
      const editProduct = () => {
        // Open a modal or navigate to edit page
        console.log(`Editing product ${props.product.id}`);
      };
  
      const deleteProduct = () => {
        productsStore.deleteProduct(props.product.id);
      };
  
      return {
        editProduct,
        deleteProduct
      };
    }
  };
  </script>
  
  <style scoped>
  .product-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
  }
  .product-item h3 {
    margin: 0;
  }
  .product-item p {
    margin: 5px 0;
  }
  .product-item button {
    margin-right: 10px;
  }
  </style>
  
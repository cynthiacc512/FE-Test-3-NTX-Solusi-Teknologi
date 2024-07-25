<template>
  <div>
    <h1>Category List</h1>
    <ul>
      <li v-for="category in categories" :key="category.id">
        <h2>{{ category.name }}</h2>
        <ul>
          <li v-for="product in category.products" :key="product.id">
            {{ product.name }} - ${{ product.price }}
          </li>
        </ul>
        <ul v-if="category.subcategories.length">
          <CategoryList :categories="category.subcategories" />
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuery, gql } from '@vue/apollo-composable';
import { ref } from 'vue';

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
      products {
        id
        name
        price
      }
      subcategories {
        id
        name
        products {
          id
          name
          price
        }
        subcategories {
          id
          name
          products {
            id
            name
            price
          }
          subcategories {
            id
            name
            products {
              id
              name
              price
            }
          }
        }
      }
    }
  }
`;

export default defineComponent({
  name: 'CategoryList',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  setup() {
    const { result, loading, error } = useQuery(GET_CATEGORIES);
    const categories = ref([]);

    // Update the categories state based on query result
    if (result.value) {
      categories.value = result.value.categories;
    }

    return {
      loading,
      error
    };
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>

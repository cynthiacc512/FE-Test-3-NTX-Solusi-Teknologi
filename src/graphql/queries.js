import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
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
      }
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation AddCategory($name: String!, $parentId: Int) {
    insert_categories_one(object: {name: $name, parent_id: $parentId}) {
      id
      name
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($id: Int!, $name: String!) {
    update_categories_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
      id
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($id: Int!) {
    delete_categories_by_pk(id: $id) {
      id
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $price: Float!, $categoryId: Int!) {
    insert_products_one(object: {name: $name, price: $price, category_id: $categoryId}) {
      id
      name
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: Int!, $name: String!, $price: Float!) {
    update_products_by_pk(pk_columns: {id: $id}, _set: {name: $name, price: $price}) {
      id
      name
      price
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;

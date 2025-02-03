<script setup>
import ProductItem from '~/components/ProductItem.vue'; // Import the ProductItem component
defineProps({
  products: Array, // Array of products
  maxLength: Number, // Max length for truncating description
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <ProductItem 
      v-for="product in products" 
      :key="product.id" 
      :product="product" 
      :maxLength="maxLength" 
    />
  </div>
</template>

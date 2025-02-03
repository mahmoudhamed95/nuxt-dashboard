<script setup>
definePageMeta({
  layout: 'dashboard', // Use the dashboard layout for this page
});

import { ref, onMounted } from 'vue';
import { useFetch } from '#app'; // useFetch for making API requests

const products = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProducts = async () => {
  try {
    const { data } = await useFetch('https://api.escuelajs.co/api/v1/products');
    products.value = data.value;
    loading.value = false;
  } catch (err) {
    error.value = 'Failed to fetch products';
    loading.value = false;
  }
};

onMounted(fetchProducts);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Products</h1>
    
    <!-- Loading state -->
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    
    <!-- Error state -->
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <!-- Product list -->
    <div v-if="products.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img :src="product.images[0]" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-4">
          <h2 class="text-sm font-semibold mb-2">{{ product.title }}</h2>
          <p class="text-sm text-gray-600 mb-4">{{ product.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-xl font-bold text-blue-600">${{ product.price }}</span>
            <NuxtLink :to="`/dashboard/products/${product.id}`" class="text-sm text-blue-500 hover:text-blue-700">View Details</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-center text-gray-500">No products found.</p>
  </div>
</template>

<style scoped>
/* Add any custom styles for your product list page */
</style>

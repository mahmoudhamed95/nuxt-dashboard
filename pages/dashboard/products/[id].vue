<script setup>
definePageMeta({
  layout: 'dashboard', // Use the dashboard layout for this page
});

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchProduct = async () => {
  try {
    const { data } = await useFetch(`https://api.escuelajs.co/api/v1/products/${route.params.id}`);
    product.value = data.value;
    loading.value = false;
  } catch (err) {
    error.value = 'Failed to fetch product details';
    loading.value = false;
  }
};

onMounted(fetchProduct);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Product Details</h1>
    
    <!-- Loading state -->
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    
    <!-- Error state -->
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>

    <!-- Product details -->
    <div v-if="product" class="bg-white p-6 shadow-md rounded-lg">
      <div class="flex">
        <img :src="product.images[0]" alt="Product Image" class="w-48 h-48 object-cover rounded-lg" />
        <div class="ml-6">
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-sm text-gray-600 my-2">{{ product.description }}</p>
          <span class="text-xl font-bold text-blue-600">${{ product.price }}</span>

          <div class="mt-4">
            <NuxtLink :to="`/dashboard/products`" class="text-blue-500 hover:text-blue-700">Back to Products</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>

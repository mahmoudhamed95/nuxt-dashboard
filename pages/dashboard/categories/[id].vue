<script setup>
definePageMeta({
  layout: 'dashboard', // Use the dashboard layout for this page
});

import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import ProductList from '~/components/ProductList.vue'; // Import ProductList component
import Pagination from '~/components/Pagination.vue'; // Import Pagination component
import NoResult from '~/components/NoResult.vue'; // Import NoResult component

const route = useRoute();
const products = ref([]);
const page = ref(1);
const totalPages = ref(1);
const maxLength = 100; // Max number of characters before truncating
const limit = 4; // Limit per page

const fetchProducts = async () => {
  const { data } = await useFetch(
    `https://api.escuelajs.co/api/v1/products/?categoryId=${route.params.id}&offset=${(page.value - 1) * limit}&limit=${limit}`
  );

  products.value = data.value;

  // Estimate total pages based on the data fetched (assuming we know the total count per page)
  if (products.value.length > 0) {
    const totalProducts = 50; // Placeholder for total product count, as we don't know it from the API directly
    totalPages.value = Math.ceil(totalProducts / limit); // Calculate total pages
  }
};

onMounted(fetchProducts);
watch(page, fetchProducts);
// Watch for changes in the route to refetch the products
watch(
  () => route.params.id,
  () => {
    fetchProducts(); // Trigger a fetch when the route parameter changes
  },
  { immediate: true } // Run the fetch on initial mount
);

const handlePageChange = (newPage) => {
  page.value = newPage;
};
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Products</h1>
    
    <div v-if="products.length > 0">
      <ProductList :products="products" :maxLength="maxLength" />
      <Pagination :page="page" :totalPages="totalPages" :onPageChange="handlePageChange" />
    </div>
    
    <NoResult v-else />
  </div>
</template>

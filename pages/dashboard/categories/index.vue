<script setup>
definePageMeta({
  layout: 'dashboard', // Use the dashboard layout for this page
});

import { ref, onMounted } from "vue";
import CategoryList from '~/components/CategoryList.vue'; // Import the new component

const categories = ref([]);

// Fetch the categories data when the component mounts
onMounted(async () => {
  try {
    const { data } = await useFetch("https://api.escuelajs.co/api/v1/categories");
    categories.value = data.value;
    console.log("Categories fetched:", categories.value);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Categories</h1>

    <!-- Check if categories are loaded -->
    <div v-if="categories?.length === 0">
      <p>Loading categories...</p>
    </div>

    <!-- Use the CategoryList component to display categories -->
    <CategoryList v-else :categories="categories" />
  </div>
</template>

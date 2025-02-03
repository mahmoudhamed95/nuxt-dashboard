<script setup>
import CategoryItem from '~/components/CategoryItem.vue'; // Import the CategoryItem component
defineProps({
  categories: Array, // Expect an array of categories as a prop
});
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <!-- Iterate over categories and pass each one to CategoryItem component -->
    <CategoryItem 
      v-for="category in categories" 
      :key="category.id" 
      :category="category" 
    />
  </div>
</template>

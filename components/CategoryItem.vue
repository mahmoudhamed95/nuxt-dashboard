<script setup>
defineProps({
  category: Object, // Expect a single category as a prop
});
</script>

<template>
  <div 
    class="bg-blue-100 text-blue-500 py-2 px-4 rounded-lg border border-blue-300 hover:bg-blue-500 hover:text-white transition-colors"
  >
    <NuxtLink :to="`/dashboard/categories/${category.id}`" class="block">
      {{ category.name }}
    </NuxtLink>
  </div>
</template>

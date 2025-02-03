<script setup>
defineProps({
  product: Object, // Expect a single product as a prop
  maxLength: Number, // Max length for truncating description
});

const truncateText = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length) + "..."; // Truncate and append ellipsis
  }
  return text;
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <!-- Parse the image URL from the stringified array -->
    <img :src="JSON.parse(product.images)[0]" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg" />
    <div class="p-4">
      <h2 class="text-sm font-semibold mb-2">{{ product.title }}</h2>

      <!-- Truncated description using the truncateText function -->
      <p class="text-sm text-gray-600 mb-4">{{ truncateText(product.description, maxLength) }}</p>

      <div class="flex justify-between items-center">
        <span class="text-xl font-bold text-blue-600">${{ product.price }}</span>
        <NuxtLink :to="`/dashboard/products/${product.id}`" class="text-sm text-blue-500 hover:text-blue-700">View Details</NuxtLink>
      </div>
    </div>
  </div>
</template>

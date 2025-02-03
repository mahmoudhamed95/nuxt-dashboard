<script setup>
defineProps({
  page: Number, // Current page
  totalPages: Number, // Total number of pages
  onPageChange: Function, // Callback to handle page change
});
</script>

<template>
  <div class="flex justify-center gap-4 mt-6">
    <button 
      :disabled="page <= 1" 
      @click="onPageChange(page - 1)" 
      class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
    >
      Previous
    </button>
    
    <!-- Show pagination numbers -->
    <div class="flex gap-2">
      <button 
        v-for="p in totalPages" 
        :key="p"
        :class="{'bg-blue-500 text-white': page === p, 'text-blue-500': page !== p}"
        @click="onPageChange(p)"
        class="px-4 py-2 border border-blue-500 rounded-lg"
      >
        {{ p }}
      </button>
    </div>
    
    <button 
      :disabled="page >= totalPages" 
      @click="onPageChange(page + 1)" 
      class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
    >
      Next
    </button>
  </div>
</template>

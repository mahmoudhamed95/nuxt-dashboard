<template>
    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col justify-between">
        <div>
          <!-- Dashboard Link -->
          <NuxtLink
            to="/dashboard"
            class="block p-3 mb-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            active-class="bg-blue-800"
          >
            Dashboard
          </NuxtLink>
  
          <!-- Categories Link -->
          <NuxtLink
            to="/dashboard/categories"
            class="block p-3 mb-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            active-class="bg-blue-800" 
          >
            Categories
          </NuxtLink>
  
          <!-- Products Link -->
          <NuxtLink
            to="/dashboard/products"
            class="block p-3 mb-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            active-class="bg-blue-800" 
          >
            Products
          </NuxtLink>
        </div>
  
        <!-- Logout Button -->
        <div>
          <button
            @click="logout"
            class="block p-2 mt-4 bg-red-500 text-white rounded-lg w-full hover:bg-red-700 transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 p-4">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const logout = () => {
    // Clear the access_token cookie
    const accessToken = useCookie("access_token");
    accessToken.value = null;
  
    // Redirect to the login page
    router.push("/login");
  };
  </script>
  
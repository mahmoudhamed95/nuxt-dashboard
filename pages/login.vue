<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("john@mail.com");
const password = ref("changeme");
const router = useRouter();

const loading = ref(false); // Add a loading state

const login = async () => {
  loading.value = true; // Set loading to true when the request starts

  try {
    // Send login request using $fetch
    const data = await $fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      body: { email: email.value, password: password.value },
    });

    // Check if login was successful and access_token is present
    if (data && data.access_token) {
      // Store the access_token in the cookie
      const accessToken = useCookie('access_token')
      accessToken.value = data.access_token;

      // Redirect to the dashboard
      router.push('/dashboard');
    }
  } catch (error) {
    console.error("Login failed", error);
  } finally {
    loading.value = false; // Reset loading to false after the request completes
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="login" class="p-6 bg-white shadow-md rounded">
      <input v-model="email" placeholder="Email" type="email" required class="p-2 border rounded w-full mb-2" />
      <input v-model="password" placeholder="Password" type="password" required class="p-2 border rounded w-full mb-2" />

      <button 
        type="submit" 
        :disabled="loading.value" 
        class="bg-blue-500 text-white p-2 w-full rounded"
        :class="{'cursor-wait': loading.value, 'cursor-pointer': !loading.value}"
      >
        <span v-if="loading.value">Loading...</span>
        <span v-else>Login</span>
      </button>
    </form>
  </div>
</template>

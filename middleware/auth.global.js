// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    const accessToken = useCookie('access_token').value
  
    // If the user is already authenticated and trying to access the login page, redirect to dashboard
    if (accessToken && to.path === '/login') {
      return navigateTo('/dashboard')
    }
  
    // If the user is not authenticated and trying to access a restricted page, redirect to login
    if (!accessToken && to.path !== '/login') {
      return navigateTo('/login')
    }
  })
  
  
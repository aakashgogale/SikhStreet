import { useAuthStore } from '../store/useAuthStore'

// Mocking Axios configuration since we are not installing axios directly to keep bundle minimal,
// but simulating the interceptor pattern with native fetch or abstracting it.
// In a real enterprise app, we'd use 'axios'. Here we create a fetch wrapper.

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const token = useAuthStore.getState().token
  
  const headers = new Headers(options.headers)
  headers.set('Content-Type', 'application/json')
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  // Interceptor: Before request
  // (e.g. CSRF token injection, Analytics tracking)

  try {
    const response = await fetch(`/api${endpoint}`, {
      ...options,
      headers,
    })

    // Interceptor: After response
    if (response.status === 401) {
      // Trigger token refresh logic or logout
      useAuthStore.getState().logout()
    }

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    // Sentry / Error monitoring abstraction hook here
    console.error('[API Error]', error)
    throw error
  }
}

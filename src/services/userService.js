// src/services/userService.js
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

/**
 * Fetch all users from the API
 * @returns {Promise<Array>} Array of user objects
 */
export async function fetchUsers() {
  try {
    const response = await axios.get(`${API_URL}/users`)
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}
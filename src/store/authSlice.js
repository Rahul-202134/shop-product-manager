import { createSlice } from '@reduxjs/toolkit';

let userFromStorage = null;

try {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    userFromStorage = JSON.parse(storedUser);
  }
} catch (error) {
  console.error('Error parsing user from localStorage:', error);
  userFromStorage = null;
}

const initialState = {
  user: userFromStorage, // Load user from localStorage if available
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      state.loading = false;
      state.error = null;

      try {
        localStorage.setItem('user', JSON.stringify(user)); // Persist user to localStorage
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;

      try {
        localStorage.removeItem('user'); // Remove user from localStorage
      } catch (error) {
        console.error('Error removing user from localStorage:', error);
      }
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;

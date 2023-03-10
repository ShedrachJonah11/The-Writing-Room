import { createSlice } from '@reduxjs/toolkit'
import { Redirect } from 'react-router-dom'
const getLocalStorage = localStorage.getItem('auth')

const initialState = {
  authenticate: !!getLocalStorage,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }) {
      if (
        payload.email.trim() !== '' &&
        payload.email.trim() === 'shedrach@gmail.com' &&
        payload.password.trim() === 'test2_3'
      ) {
        localStorage.setItem('auth', 'authenticate')
        state.authenticate = true
      }
    },
    logout(state) {
      localStorage.clear()
      state.authenticate = false
    },
  },
})

export const authSliceAction = authSlice.actions
export const authSliceReducer = authSlice.reducer

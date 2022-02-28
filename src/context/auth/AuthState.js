import React, { useReducer, useContext } from 'react'
import * as uuid from 'uuid'
import axios from 'axios'
import AuthContext from './AuthContext'
import authReducer from './AuthReducer'
import {
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types'

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // Load user

  // Register User

  // Login User

  // Logout

  //Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState

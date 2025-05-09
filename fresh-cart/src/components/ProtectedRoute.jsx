import { Navigate } from 'react-router-dom'

import { useMain } from '../context/MainContext'

import React from 'react'

const ProtectedRoute = ({ children }) => {
    const {isUser}=useMain()
    if (!isUser) {
        console.log(!isUser)
        return <Navigate to='/login' replace />
      }
  return children
}

export default ProtectedRoute
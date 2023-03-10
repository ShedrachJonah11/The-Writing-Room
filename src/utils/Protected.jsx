import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
function Protected({ children }) {
  const { authenticate } = useSelector((state) => state.auth)
  console.log(authenticate)
  if (!authenticate) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected

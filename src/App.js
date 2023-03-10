import React from 'react'
import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Regsiter } from './pages/login/Regsiter'
import { Routes, Route } from 'react-router-dom'
import { DetailsPages } from './pages/details/DetailsPages'
import { Account } from './pages/account/Account'
import { Create } from './components/create/Create'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const { authenticate } = useSelector((state) => state.auth)
  console.log(authenticate)
  const getLocalStorage = localStorage.getItem('auth')
  useEffect(() => {
    console.log('app updated')
  }, [authenticate])
  console.log()
  return <>{/* <Header /> */}</>
}
export default App

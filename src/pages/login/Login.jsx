import React from 'react'
import './login.css'
import back from '../../assets/images/my-account.jpg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSliceAction } from '../../store/slices/auth-slice'
import { useEffect } from 'react'
import { Header } from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const navigate = useNavigate()
  const { authenticate } = useSelector((state) => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handlerDummy = () => {
    setEmail('shedrach@gmail.com')
    setPassword('test2_3')
  }
  console.log(authenticate)
  const dispatch = useDispatch()

  const handlerFormSubmit = (e) => {
    e.preventDefault()
    dispatch(
      authSliceAction.login({
        email: 'shedrach@gmail.com',
        password: 'test2_3',
      }),
    )
    console.log(authenticate)
    navigate('/', { replace: true })
  }
  useEffect(() => {}, [dispatch])
  return (
    <>
      <Header />
      <section className="login w-[100%] p-0">
        <div className="container w-full">
          <div className="backImg bg-red-300 w-full flex mx-auto ">
            <img src={back} alt="" className="" />
            <div className="text text-center  left-[20%] tablet:left-[50%] mx-auto flex flex-col p-3  ">
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form
            onSubmit={handlerFormSubmit}
            className="flex flex-col w-full tablet:w-[50%] "
          >
            <label className="text-lg">Username or email address *</label>
            <input
              type="text"
              value={email}
              required
              placeholder="email address"
            />
            <label className="text-lg">Password *</label>
            <input
              type="password"
              required
              value={password}
              placeholder="enter password"
            />
            <span className="flex gap-2 flex-col">
              <button type="submit" className="button">
                Log in
              </button>
              <button onClick={handlerDummy} type="button" className="button">
                Dummy Login?
              </button>
            </span>
          </form>
        </div>
      </section>
    </>
  )
}

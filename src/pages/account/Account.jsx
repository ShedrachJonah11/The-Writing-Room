import React from 'react'
import image from '../../assets/images/input.png'
import './account.css'
import { Header } from '../../components/header/Header'

export const Account = () => {
  return (
    <>
      <Header />
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="img" />
                <img
                  src={'https://avatars.githubusercontent.com/u/99442773?v=4'}
                  alt="image"
                  class="image-preview"
                />
              </div>
            </div>
            <div className="right">
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import React, { useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { GrHelp } from 'react-icons/gr'
import { BiLogOut } from 'react-icons/bi'
import { RiImageAddLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authSliceAction } from '../../store/slices/auth-slice'

export const User = () => {
  const dispatch = useDispatch()

  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(false)
  }
  const handleLogout = () => {
    dispatch(authSliceAction.logout())

    // <Redirect to='/' />
  }
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://avatars.githubusercontent.com/u/99442773?v=4"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/account">
                  <div className="image">
                    <div className="img">
                      <img
                        src="https://avatars.githubusercontent.com/u/99442773?v=4"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h4>Shedrach</h4>
                      <label></label>
                    </div>
                  </div>
                </Link>
                <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to="/account">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className="box" onClick={handleLogout}>
                  <BiLogOut className="icon" />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}

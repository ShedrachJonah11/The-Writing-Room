import React, { useEffect, useState } from 'react'
import './create.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/header/Header'

export const UpdatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [user, setUser] = useState(null)
  const [isLoad, setIsLoading] = useState(false)
  const [succes, setSuces] = useState(false)

  const handleTitle = (e) => {
    setTitle((prev) => e.target.value)
  }

  const handleBody = (e) => {
    setBody((prev) => e.target.value)
  }

  const { id } = useParams()

  const handleUpdate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: title,
          body: body,
          userId: user,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )

    const data = await res.json()
    setIsLoading(false)
    setSuces(true)
    setTimeout(() => {
      setSuces(true)
    }, 3000)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title)
        setBody(data.body)
        setUser(data.userId)
      })
  }, [])

  return (
    <>
      <Header />
      <section className="newPost relative">
        {succes ? (
          <span
            className={` ${
              succes ? 'success' : 'success hide'
            } absolute flex bg-green-400 text-white p-2 rounded-lg right-3`}
          >
            Article Updated Successfully
          </span>
        ) : (
          ''
        )}

        <div className="container boxItems ">
          <div className="img ">
            <img
              src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              class="image-preview"
            />
          </div>
          <form onSubmit={handleUpdate}>
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>
            <input
              type="text"
              placeholder="Title"
              onChange={handleTitle}
              value={title}
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={handleBody}
              value={body}
            ></textarea>

            <button className="button">
              {isLoad ? 'Loading...' : 'Update Post'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

import React, { useState } from 'react'
import './details.css'
import '../../components/header/header.css'
import img from '../../assets/images/b5.jpg'
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { blog } from '../../assets/data/data'
import { Header } from '../../components/header/Header'

export const DetailsPages = () => {
  const [isDelete, setIsDeleting] = useState(false)
  const [blogs, setBlogs] = useState(null)
  const [comment, setComment] = useState([])
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setComment(data)
      })

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogs(data))

    // let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    // if (blogs) {
    //   setBlogs(blogs)
    // }
  }, [])

  const handleDelete = async () => {
    setIsDeleting(true)
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
      },
    ).then((res) => {
      if (res.ok) {
        alert('Article Deleted')
        return res
      }
    })
    const data = await res.json()
    setIsDeleting(false)
    navigate('/')
  }

  const handlerEdit = () => {
    navigate(`/edit/${id}`)
  }
  return (
    <>
      <Header />
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button" onClick={handlerEdit}>
                  <BsPencilSquare />
                </button>
                <button className="button" onClick={handleDelete}>
                  {isDelete ? 'Deleting' : <AiOutlineDelete />}
                </button>
              </div>
              <h1>Betadine Feminine Wash</h1>
              <p>{blogs.desc}</p>
              <p>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure?" Section 1.10.33 of
                "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At
                vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
              </p>
              <p>Author: Shadrach</p>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl">Comments</h2>
                {comment.map((com) => (
                  <div className="flex gap-2 w-[70%] p-2" key={com.postId}>
                    <span className="flex-1 w-[100px] flex flex-col">
                      <span>{com.name.slice(0, 1)}</span>
                      <span>user</span>
                    </span>
                    <span className="flex-6 flex gap-2 flex-col p-1 rounded-md bg-gray-200 justify-start items-start w-full">
                      <span>{com.name}</span>
                      <span>{com.body}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

import React, { useEffect, useState } from "react";
import "./blog.css";
import b1 from "../../assets/images/blogs/b1.jpg";
import CommentSection from "../../pages/comment/CommentsForm";

import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Card = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <>
      <section className="blog">
        <div className="container  grid3 grid  grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 ">
          {post.slice(0, 20).map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={b1} alt="" />
              </div>
              <div className="details">
                <Link to={`/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.body.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  {/* <label htmlFor="">{item.date}</label> */}
                  <AiOutlineComment
                    onClick={CommentSection}
                    className="icon"
                  />{" "}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />{" "}
                  <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

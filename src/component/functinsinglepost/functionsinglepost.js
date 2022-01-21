import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Post from "../post/post";

function Functionsinglepost(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (post && post.id === props.id) {
      return;
    }
    getPostDetails();
  }, []);

  function getPostDetails() {
    axios
      .get(`https://react-course-6cfcc-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => {
        setPost({ ...response.data, id: props.id });
      });
  }

  if (post) {
    return (
      <div>
        <div>Id:{post.id}</div>
        <div>Tittle:{post.id1.title}</div>
        <div>Description:{post.id1.description}</div>
   
      </div>
    
    );
  }
  return null;
}

export default Functionsinglepost;

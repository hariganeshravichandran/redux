import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';

function Addpost(props) {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    

    function onCreatePost(e) {
      e.preventDefault();
       const postData = {
         title,
         description,
       };
       axios.post(
         `https://react-course-6cfcc-default-rtdb.firebaseio.com/posts.json`,
         postData,
       )
       .then((response) => {
        //  props.onPostAdded();
         console.log(postData);
       })
    }
  return (
     <div>
          <form onSubmit={onCreatePost}>
           <label> Title:
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </label><br/><br/>
          <label>Description:
           <textarea value={description}  onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <button type="submit" >createpost</button>
         
        </form>
        
     </div>
  )
}

export default Addpost;

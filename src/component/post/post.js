import React from 'react';

function Post(props) {
  return(
    <div>
        <div>Id:{props.id} </div>
        <div>Title:{props.post.id1.title} </div>
        <div>Description:{props.post.id1.description}</div>
    </div>
  ) 
}

export default Post;

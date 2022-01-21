import axios from "axios";
import React, { Component } from "react";
import Post from "../post/post";

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state ={
            posts: [],
        }
    }

    componentDidMount() {
        axios.get(
            `https://react-course-6cfcc-default-rtdb.firebaseio.com/posts.json`
        ).then((response) => {
            const posts = [];
            for (let key in response.data) {
                posts.push({ ...response.data[key], id: key })
            }
         this.setState({
             posts:posts,
         })
        })
    }
 render() {
     
    const posts = this.state.posts.push.map((post) => {
        return <Post key={post.id} post={post}/>;
    });
    
     return ( 
      <div> 
         <h1>Posts data</h1>
         <div>
             {posts}
         </div>
      </div>
        )
      }
    }
    

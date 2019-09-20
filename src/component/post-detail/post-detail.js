import React from 'react';
import axios from 'axios';
import './post-detail.css';

const Postdetails = (props) => {
    return(
        <div className="Posts--container">
            <div className="Posts--Header">
                <label className="blog--title">{props.title}</label>
                <button className="delete-blog" onClick={()=> {blogDeleteHandler(props.blogId, props.history)}}>Delete</button>
            </div>
            <p className="Blog-content">{props.content}</p>
        </div>
    )
}

const blogDeleteHandler = (blogId, history) => {
    axios.delete('/posts/'+ blogId, {data : { id: blogId}})
        .then((res) => {
            history.push('/users')
        })
    }

export default Postdetails;
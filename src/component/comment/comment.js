import React from 'react';
import './comment.css';

const Comment = (props) => {
    return(
        <div className="comment--wrapper">
            <label className="comment--email">{props.email}</label>
            <p className="comment-content">{props.comment}</p>
        </div>
    )
}

export default Comment;

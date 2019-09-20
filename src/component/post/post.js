import React from 'react';
import './post.css';

import { NavLink } from 'react-router-dom'

const Post = (props) => {
    return(
        <NavLink to={"/posts/" + props.postId} exact activeClassName="my-active" activeStyle={{ color: '#f07819', textDecoration: 'underline'}}>
            <div className="Post--preface">
                <h3 className="Post--preface--title">
                    {props.title}
                </h3>
            </div>
        </NavLink>
    )
}

export default Post;
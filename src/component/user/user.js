import React from 'react';
import './user.css';

import { NavLink } from 'react-router-dom';

const User = (props) => {
    console.log(props)
    return(
        <div className="User--card">
            <h3 className="User--name">{props.name}</h3>
            <div className="User--subContainer">
                <label className="User--company">{props.company}</label>
                <NavLink to={"/users/" + props.id} exact activeClassName="my-active" activeStyle={{ color: '#f07819', textDecoration: 'underline'}}>
                    Blog Posts
                </NavLink>
            </div>
        </div>
    )
}
export default User;
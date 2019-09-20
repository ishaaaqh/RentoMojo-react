import React, { Component } from 'react';
import axios from 'axios';
import './Users.css';

import User from './../../component/user/user';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata:[]
        }
    }
    localdata;

    userSelectedHandler = id => {
        this.props.history.push('/posts/' + id);
      };

    componentWillMount() {
        const req = async () => {
            const res = await axios.get('/users');
            const Users = res.data;
            const presentUsers = Users.map( user => {
                return {
                    ...user
                };
            });
            this.setState({ userdata: presentUsers})
        }
        req()
    }
    loadUserData() {
        
    }
    render(){
        let users = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
          users = this.state.userdata.map((user) => {
            return (
              <User key={user.id} name={user.name} company={user.company.name} id={user.id} onClick={() => this.userSelectedHandler(user.id)}/>
            );
          });
        }
        return (
          <div>
            <section className="Users">{users}</section>
           
          </div>
        );
    }
}
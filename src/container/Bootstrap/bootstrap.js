import React, { Component } from 'react';
import Users from '../Users/Users';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../Posts/Posts';
import PostDetails from '../PostDetails/PostDetails';


export default class Bootstrap extends Component {
    render() {
        return (
          <div className="Blog">
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/users/" exact activeClassName="my-active" activeStyle={{ color: '#f07819', textDecoration: 'underline'}}>
                        Users
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <section>
              <Switch>
                <Route path="/users" exact component={Users} />
                <Route path="/users/:id" exact component={Posts} />
                <Route path="/posts/:id" exact component={PostDetails} />
                <Route render={() => <h1>Welcome, Please select User to view user blogs</h1>} />
              </Switch>
            </section>
          </div>
        );
      }
}
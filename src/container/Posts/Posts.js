import React, { Component } from 'react';
import axios from 'axios';
import './Post.css'

import Post from '../../component/post/post';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            presentPosts: [],
            lowerlimit:0,
            upperlimit: 10
        }
    }
    componentWillMount() {
        const { id } = this.props.match.params
        console.log(this.props.match.params)
        console.log(id);
        const req = async () => {
            const res = await axios.get('/posts?userId='+ id +'&skip=' + this.state.lowerlimit + '&limit='+ this.state.upperlimit);
            console.log(res.data)
            const posts = res.data;
            const updatedPosts = posts.map( post => {
                return {
                    ...post
                };
            });
            this.setState({presentPosts: updatedPosts})
        }
        req()
    }
    ViewNextPosts() {
        console.log("next Posts clicked");
        // if(this.sta)
        if (this.state.upperlimit < 40){
            this.setState({lowerlimit : this.state.lowerlimit + 10,upperlimit :this.state.upperlimit + 10})
            console.log(this.state.upperlimit,this.state.lowerlimit)
        }
    }
    ViewPreviousPosts() {
        console.log("previous posts clicked");
        if (this.state.lowerlimit > 0){
            this.setState({lowerlimit : this.state.lowerlimit - 10,upperlimit :this.state.upperlimit - 10})
        }
        console.log(this.state.upperlimit,this.state.lowerlimit)
    }
    render(){
        let posts = <p style={{ textAlign: 'center' }}>No data Present</p>;
        if (!this.state.error) {
          posts = this.state.presentPosts.map((post) => {
            return (
              <Post key={post.userId} title={post.title} postId={post.id}/>
            );
          });
        }
        return (
          <div>
            <section className="Posts">{posts}</section>
            <div className="Post--navigation--btn">
                <button className="Previous--btn" onClick={() => {this.ViewPreviousPosts()}}>Previous</button>
                <button className="Next--btn" onClick={() => {this.ViewNextPosts()}}>Next</button>
            </div>
          </div>
        )
    }
}
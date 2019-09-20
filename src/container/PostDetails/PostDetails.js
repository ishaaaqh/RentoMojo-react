import React, { Component } from 'react';
import axios from 'axios';
import './postdetail.css';

import Comment from '../../component/comment/comment';
import PostDetail from '../../component/post-detail/post-detail';

export default class PostDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            presentblog: {},
            blogComments: []
        }
    }
    componentWillMount() {
        const { id } = this.props.match.params
        console.log(this.props.match.params)
        console.log(id);
        const blogreq = async () => {
            const res = await axios.get('/posts/'+ id);
            console.log(res.data)
            const blog = res.data;
            
            this.setState({presentblog: blog})
        }
        blogreq()
        const commentsreq = async () => {
            const res = await axios.get('comments?postId='+ id +'&skip=' + this.state.lowerlimit + '&limit='+ this.state.upperlimit);
            console.log(res.data)
            const comments = res.data;
            const presentComments = comments.map( comment => {
                return {
                    ...comment
                };
            });
            this.setState({blogComments: presentComments})
        }
        commentsreq()
    }

    render(){
        let comments = <p style={{ textAlign: 'center' }}>Sorry, Comments are unavailable right now!!!</p>;
        if (!this.state.error) {
          comments = this.state.blogComments.map((comment) => {
            return (
              <Comment key={comment.userId} email={comment.email} comment={comment.body}/>
            );
          });
        }
        return (
          <div>
            <PostDetail title={this.state.presentblog.title} content={this.state.presentblog.body} blogId={this.state.presentblog.id} history={this.props.history}/>
            <section className="Comments">{comments}</section>
          </div>
        )
    }
}
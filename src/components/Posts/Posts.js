import React, {Component} from 'react';
import "./Posts.scss";
import Post from "../Post/Post";
import axios from "axios";

class Posts extends Component {
    postsEndpoint = "//fwolfeil.bitlampsites.com/wpd/sandbox/wp-json/wp/v2/posts";
    // this class component we are extending gives us "state" and "setState()"
    state = {
        posts: [],
        isLoaded: false,
    }

    componentDidMount() {
        axios
            .get(this.postsEndpoint)
            .then(response => {
                console.log('API Response', response);

                this.setState({
                    posts: response.data,
                    isLoaded: true,
                });
            })
            .catch(err => {
                console.error('API ERROR: ', err)
            })
    }

    render() {
        return (
            <div className="Posts">
                {this.state.isLoaded ? '' : <p>Loading...</p>}
                {this.state.posts.map( post =>
                    <Post
                        title={post.title.rendered}
                        body={post.content.rendered}
                        key={post.id}
                    />
                )}
            </div>
        );
    }
}

Posts.propTypes = {};

export default Posts;
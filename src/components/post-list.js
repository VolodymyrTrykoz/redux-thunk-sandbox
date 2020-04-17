import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from './user-header';


class PostList extends Component {

    componentDidMount(){
        this.props.fetchPostsAndUsers();             
    }

    render(){
        const {posts} = this.props;
        return (
            <>
                {
                    posts.map(item => (
                        <div key={item.id}>
                            <div className="content">
                                <div className="description">
                                    <h2>{item.title}</h2> 
                                    <p>{item.body}</p>
                                    <UserHeader 
                                        id={item.userId}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(
    mapStateToProps, {fetchPostsAndUsers}
)(PostList);

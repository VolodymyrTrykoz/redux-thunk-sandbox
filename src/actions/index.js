import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(item => dispatch(fetchUser(item)));
}

export const fetchPosts = () => async dispatch => {
    const resp = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: resp.data});        
}

export const fetchUser = (id) => async dispatch => {
    const resp = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: resp.data});        
}    

 
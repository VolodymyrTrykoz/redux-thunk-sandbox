import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserHeader extends Component {
    render(){
        const {user} = this.props;
        return (
            <>
                { user && (
                    <div>{user.name}</div> 
                )}
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {    
    return {
        user: state.users.find(item => item.id === ownProps.id),
    }
}

export default connect(mapStateToProps)(UserHeader);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    console.log("loading pre mount");
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div>
        <h4>{user.name}</h4>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users:state.users};
}


export default connect(mapStateToProps, actions)(UserList);

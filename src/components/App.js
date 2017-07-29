import React, { Component } from 'react';
// import {connect} from 'react-redux';
import Header from './Header';
import UserList from './User_list';
import farmland from '../assets/farmland_short.mp4';
import '../css/style.css';

// <UserList />

class App extends Component {
  // if App gets passed any children render it
  render() {
    return (
      <div className="App">
        <video className='background-video responsive-video' muted autoPlay loop>
          <source src={farmland} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
          <div className="splash-name">
        <h1>FarmTable</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {posts: state.posts}
// }

export default App;

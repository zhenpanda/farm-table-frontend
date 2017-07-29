import React, { Component } from 'react';
import farmland from '../assets/farmland_short.mp4';
import '../css/style.css';

import $ from 'jquery';
require('materialize-css/dist/css/materialize.css');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

class App extends Component {
  componentDidMount() {
    console.log("loading jquery component....");
    }
  // if App gets passed any children render it
  render() {
    return (
      <div>

        <div className="splash">
          <div className="header">
          </div>
          <video className='background-video responsive-video' muted autoPlay loop>
            <source src={farmland} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className="splah-text center-align">
            <h1 className="splash-name">FarmTable</h1>
            <h4 className="splash-title">
              Partnering with Farmers to Educate Communities on Where Food Comes From
            </h4>
          </div>
        </div>

        <div className="portal">
          <div className="container">
            <div className="row">
              <div className="col s6">Visitors</div>
              <div className="col s6">Farmers</div>
            </div>
          </div>
        </div>

    </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {posts: state.posts}
// }

export default App;

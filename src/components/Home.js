import React, { Component } from 'react';
import farmland from '../assets/farmland_short.mp4';
import {Link} from 'react-router';
import '../css/style.css';

import $ from 'jquery';
require('materialize-css/dist/css/materialize.css');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

class Home extends Component {
  componentDidMount() {
    console.log("loading jquery component....");
    $(document).ready(function(){
      $(window).scrollTop(0);
      $('#modal1').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) {
            console.log(modal, trigger);
          },
          complete: function() {
            console.log('Closed');
          }
        }
      );
      $('#modal2').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) {
            console.log(modal, trigger);
          },
          complete: function() {
            console.log('Closed');
          }
        }
      );
    });
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
            <h1 className="splash-name">The&nbsp;Farm&nbsp;Table</h1>
            <h4 className="splash-title">
              Partnering with Farmers to Educate Communities on Where Food&nbsp;Comes&nbsp;From
            </h4>
          </div>
        </div>

        <div className="portal">
          <div className="container">
            <div className="row">

              <div className="col s6 centered">
                <a className="waves-effect orange btn-large modal-trigger portal-text z-depth-5" href="#modal1">Host a Tour</a>
                <div id="modal1" className="modal">
                  <div className="modal-content">
                  <div className="row">
                    <h4 className="card blue-grey lighten-1 col s6 card-content white-text">Farmers Sign Up</h4>
                  </div>
                  <div className="row">
                  <label htmlFor="farm-name" className="label-text">Farm Name:</label>
                    <div className="input-field col s8">
                      <input value="WonderNutFarm" id="farm-name" type="text" className="validate" />
                    </div>
                  </div>
                  <div className="row">
                  <label htmlFor="password" className="label-text">Password:</label>
                    <div className="input-field col s8">
                      <input value="passwordfakker" id="password" type="password" className="validate" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Link to="farm">
                      <a className="modal-action modal-close waves-effect waves-green btn-flat">Submit</a>
                    </Link>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col s6 centered">
                <a className="waves-effect green btn-large modal-trigger portal-text z-depth-5" href="#modal2">Book a Tour</a>
                <div id="modal2" className="modal">
                  <div className="modal-content">
                    <div className="row">
                      <h4 className="card blue-grey lighten-1 col s6 card-content white-text">Coming Soon!</h4>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a href="" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

    </div>
    );
  }
}

export default Home;

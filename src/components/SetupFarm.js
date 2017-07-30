import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import '../../node_modules/font-awesome/css/font-awesome.min.css';
import myFarm from '../assets/myFarm.jpg';

import $ from 'jquery';
require('materialize-css/dist/css/materialize.css');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');


class SetupFarm extends Component {
  componentDidMount() {
    console.log("loading jquery component....");
    $(document).ready(function() {
    });
  }

  render() {
    return (
      <div className="setup-farm">

        <div className="setup-farm-header">
          <h3 className="setup-farm-header-text">GENERAL FORM</h3>
        </div>

        <div className="row big-form">
           <form className="col s12 card amber lighten-4 ">

             <div className="row">
               <div className="input-field col s2">
                <label htmlFor="">Name of Farm:</label>
               </div>
               <div className="input-field col s3">
                 <input value="Wondernut Farm" id="" type="text" className="validate" />
               </div>
               <div className="col s1" />
               <div className="input-field col s2">
                <label htmlFor="">Year Founded:</label>
               </div>
               <div className="input-field col s3">
                 <input value="2014" id="" type="text" className="validate" />
               </div>
             </div>
             <div className="row">
               <div className="input-field col s2">
                <label htmlFor="">Name of Owner:</label>
               </div>
               <div className="input-field col s3">
                 <input value="Rachel & Jordan" id="" type="text" className="validate" />
               </div>
               <div className="col s1" />
               <div className="input-field col s2">
                <label htmlFor="">Address:</label>
               </div>
               <div className="input-field col s3">
                 <input value="Groveland, CA" id="" type="text" className="validate" />
               </div>
             </div>
             <div className="row">
               <div className="input-field col s2">
                <label htmlFor="">Phone Number:</label>
               </div>
               <div className="input-field col s3">
                 <input value="925-545-2323" id="" type="text" className="validate" />
               </div>
               <div className="col s1" />
               <div className="input-field col s2">
                <label htmlFor="">Email Address:</label>
               </div>
               <div className="input-field col s3">
                 <input value="rach@wondernut.com, CA" id="" type="text" className="validate" />
               </div>
             </div>

           </form>
         </div>

         <div className="row second-form">
            <form className="col s12 card cyan lighten-4">

              <div className="row second-form-header">
              <label htmlFor="textarea1" className="text-area-title">Upload a Description of Your Farm</label>
                <div className="support-text">
                When were you founded? What do you love about being a farmer? What are you passionate about sharing with your community?
                </div>
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea" value="Wondernut Farm sustainably cultivates animals and crops. We love hosting guests and sharing our passion for the land with our community.  We are relatively new to farming yet our team is a vast source of information and enthusiasm."></textarea>
                </div>
              </div>

              <div className="row">
              <label htmlFor="ile-area" className="text-area-title">Upload Photos of your Farm</label>
                <div className="file-field input-field">
                  <div className="btn col s2" id="file-area">
                    <span>File</span>
                    <input type="file" />
                  </div>
                  <div className="file-path-wrapper col s4">
                    <input className="file-path validate" type="text" value="/Documents/picuterOfMyFarm.jpg"/>
                  </div>
                </div>
                <div className="col s6">
                  <img src={myFarm} />
                </div>
              </div>
            </form>

          </div>
      </div>
    )
  }
}

export default SetupFarm;

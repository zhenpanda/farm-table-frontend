import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import '../../node_modules/font-awesome/css/font-awesome.min.css';

import field from '../assets/farmFieldImg.png';
import tracker from '../assets/tracker.png';
import cow from '../assets/cow.png';

import $ from 'jquery';
require('materialize-css/dist/css/materialize.css');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

class Farm extends Component {
  componentDidMount() {
    console.log("loading jquery component....");
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  render() {
    return (
      <div>
        <div className="farm-header z-depth-3 orange lighten-4"></div>
        <div className="farm">
          <div className="parallax-container">
            <div className="parallax">
              <img src={field} />
            </div>
            <h3 className="center-align field-text">Making Agri-Tourism More Accessible to Farmers</h3>
          </div>

          <div className="section orange lighten-4 z-depth-4">
            <div className="row container">
              <div className="collection">
                <a className="collection-item">
                  <p className="bullets"><i className="fa fa-leaf bullets-icon" aria-hidden="true"></i>
                  Do you love what you do and want to share this your community?
                  </p>
                </a>
                <a className="collection-item">
                  <p className="bullets"><i className="fa fa-leaf bullets-icon" aria-hidden="true"></i>
                  Do you love to host guests and share your farming practices?
                  </p>
                </a>
                <a className="collection-item">
                  <p className="bullets"><i className="fa fa-leaf bullets-icon" aria-hidden="true"></i>
                  Are you looking for alternative sources of revenue?
                  </p>
                </a>
              </div>

            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax"><img src={tracker} /></div>
          </div>
        </div>

        <div className="row">
          <div className="col s2" />
           <div className="col s8">
             <div className="card green darken-1">
               <div className="card-content white-text">
                 <p>
                  Our communities are starving to get back to our roots and learn where our food comes from, how is it cultivated and how it get to our homes.  Let’s make it easy to bring people to learn about your farm and enjoy a fresh, delicious meal.
                 </p>
               </div>
               <div className="card-action z-depth-5">
                 <p>
                   On average a farmer can earn $6,000/month in revenue by hosting a handful of people every weekend*
                 </p>
                 <a>*Dependent on season. Utilizes basic assumptions.</a>
               </div>
             </div>
           </div>
         <div className="col s2" />
       </div>

       <div className="row">
        <div className="col s2" />
         <div className="col s8 center-align">
           <table>
             <thead>
               <tr>
                   <th>Example Tour Details</th>
                   <th></th>
                   <th></th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td><i className="fa fa-circle example-tour-top-text" aria-hidden="true"></i>Average Tour Size: 4 people</td>
               </tr>
               <tr>
                 <td><i className="fa fa-circle example-tour-top-text" aria-hidden="true"></i>Average Tour Cost per person: $85</td>
               </tr>
               <tr>
                <td><i className="fa fa-circle example-tour-top-text" aria-hidden="true"></i>Schedule Concept:</td>
               </tr>
               <tr>
                <td className="example-tour-text"><i className="fa fa-caret-right example-tour-bot-text" aria-hidden="true"></i>Meet & Greet: 15 - 30 minutes</td>
               </tr>
               <tr>
                <td className="example-tour-text"><i className="fa fa-caret-right example-tour-bot-text" aria-hidden="true"></i>Tour / Pick / Pet: 60 -  90 minutes</td>
               </tr>
               <tr>
                <td className="example-tour-text"><i className="fa fa-caret-right example-tour-bot-text" aria-hidden="true"></i>Enjoy a Meal: 60 - 90 minutes</td>
               </tr>
               <tr>
                <td className="example-tour-text"><i className="fa fa-caret-right example-tour-bot-text" aria-hidden="true"></i>Total Time: 2hrs 15 minutes - 3hrs 30 minutes</td>
               </tr>
             </tbody>
           </table>
          </div>
          <div className="col s2" />
        </div>

        <div className="row">
          <div className="col s5" />
           <div className="col s4">
            <a className="waves-effect orange darken-4 btn-large host-btn">
            HOST A TOUR
            </a>
           </div>
          <div className="col s3" />
        </div>

        <div className="parallax-container">
          <div className="parallax">
            <img src={cow} />
          </div>
        </div>

      </div>
    );
  }
}
export default Farm;

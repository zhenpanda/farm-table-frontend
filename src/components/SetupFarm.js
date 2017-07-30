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
      $(window).scrollTop(0);

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      });

      window.addEventListener("scroll", function(event) {
          var top = this.scrollY,
              left =this.scrollX;
          console.log(top);
          if (top >= 1225 && true) {
            console.log("Okay popup here....")
          }
      }, false);

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

        <div className="row third-form">
          <h6 className="details-header-text">WHAT DO YOU FARM? CHECK ALL THAT APPLY</h6>
          <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header green lighten-2">Vegetables<p className="expander"><i className="fa fa-caret-down" aria-hidden="true"></i></p></div>
                <div className="collapsible-body">
                <div className="col s12 card green lighten-2">
                 <table>
                  <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test1" />
                           <label htmlFor="test1" className="vegetables-text">Artichoke</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test2" />
                           <label htmlFor="test2" className="vegetables-text">Arugula</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test3" />
                           <label htmlFor="test3" className="vegetables-text">Asparagus</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test4" />
                           <label htmlFor="test4" className="vegetables-text">Eggplant</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test5" />
                           <label htmlFor="test5" className="vegetables-text">Amaranth</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test6" />
                           <label htmlFor="test6" className="vegetables-text">Legumes</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test7" />
                           <label htmlFor="test7" className="vegetables-text">Bok choy</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test8" />
                           <label htmlFor="test8" className="vegetables-text">Broccoflower </label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test9" />
                           <label htmlFor="test9" className="vegetables-text">Broccoli</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test10" />
                           <label htmlFor="test10" className="vegetables-text">Brussels sprouts</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test11" />
                           <label htmlFor="test11" className="vegetables-text">Cabbage</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test12" />
                           <label htmlFor="test12" className="vegetables-text">Calabrese</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test13" />
                           <label htmlFor="test13" className="vegetables-text">Carrots</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test14" />
                           <label htmlFor="test14" className="vegetables-text">Cauliflower sprouts</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test15" />
                           <label htmlFor="test15" className="vegetables-text">Celery</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test16" />
                           <label htmlFor="test16" className="vegetables-text">Chard</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test17" />
                           <label htmlFor="test17" className="vegetables-text">Collard greens</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test18" />
                           <label htmlFor="test18" className="vegetables-text">Corn salad</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test19" />
                           <label htmlFor="test19" className="vegetables-text">Endive</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test20" />
                           <label htmlFor="test20" className="vegetables-text">Fiddleheads</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test21" />
                           <label htmlFor="test21" className="vegetables-text">Frisee</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test22" />
                           <label htmlFor="test22" className="vegetables-text">Fennel</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test23" />
                           <label htmlFor="test23" className="vegetables-text">Herbs and spices</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test24" />
                           <label htmlFor="test24" className="vegetables-text">Kale</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test25" />
                           <label htmlFor="test25" className="vegetables-text">Kohlrabi</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test26" />
                           <label htmlFor="test26" className="vegetables-text">Lettuce</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test27" />
                           <label htmlFor="test27" className="vegetables-text">Corn</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test28" />
                           <label htmlFor="test28" className="vegetables-text">Mushrooms</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test29" />
                           <label htmlFor="test29" className="vegetables-text">Mustard greens</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test30" />
                           <label htmlFor="test30" className="vegetables-text">Nettles</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test31" />
                           <label htmlFor="test31" className="vegetables-text">New Zealand spinach</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test32" />
                           <label htmlFor="test32" className="vegetables-text">Okra</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test33" />
                           <label htmlFor="test33" className="vegetables-text">Onion</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test34" />
                           <label htmlFor="test34" className="vegetables-text">Peppers</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test35" />
                           <label htmlFor="test35" className="vegetables-text">Radicchio</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test36" />
                           <label htmlFor="test36" className="vegetables-text">Rhubarb</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test37" />
                           <label htmlFor="test37" className="vegetables-text">Root vegetables</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test38" />
                           <label htmlFor="test38" className="vegetables-text">Radish</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test39" />
                           <label htmlFor="test39" className="vegetables-text">Skirret</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test40" />
                           <label htmlFor="test40" className="vegetables-text">Topinambur</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test41" />
                           <label htmlFor="test41" className="vegetables-text">Squashes</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test42" />
                           <label htmlFor="test42" className="vegetables-text">Tat soi</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test43" />
                           <label htmlFor="test43" className="vegetables-text">Tomato</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test44" />
                           <label htmlFor="test44" className="vegetables-text">Tubers</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                    <tr>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test45" />
                           <label htmlFor="test45" className="vegetables-text">Turnip greens</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test46" />
                           <label htmlFor="test46" className="vegetables-text">Water chestnut</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test47" />
                           <label htmlFor="test47" className="vegetables-text">Watercress</label>
                         </p>
                       </form>
                      </td>
                      <td>
                       <form>
                         <p>
                           <input type="checkbox" id="test48" />
                           <label htmlFor="test48" className="vegetables-text">Zucchini</label>
                         </p>
                       </form>
                      </td>
                    </tr>
                  </tbody>
                 </table>
                 </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header pink lighten-3">Fruit<p className="expander"><i className="fa fa-caret-down" aria-hidden="true"></i></p></div>
                <div className="collapsible-body">
                  <div className="row third-form">
                     <div className="col s12 card pink lighten-3">
                      <table>
                       <thead>
                         <tr>
                             <th></th>
                             <th></th>
                             <th></th>
                             <th></th>
                         </tr>
                       </thead>

                       <tbody>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test1" />
                                <label htmlFor="f-test1" className="vegetables-text">Apple</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test2" />
                                <label htmlFor="f-test2" className="vegetables-text">Apricot</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test3" />
                                <label htmlFor="f-test3" className="vegetables-text">Avocado</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test4" />
                                <label htmlFor="f-test4" className="vegetables-text">Banana</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test5" />
                                <label htmlFor="f-test5" className="vegetables-text">Bilberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test6" />
                                <label htmlFor="f-test6" className="vegetables-text">Blackberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test7" />
                                <label htmlFor="f-test7" className="vegetables-text">Blackcurrant</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test8" />
                                <label htmlFor="f-test8" className="vegetables-text">Blueberry</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test9" />
                                <label htmlFor="f-test9" className="vegetables-text">Boysenberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test10" />
                                <label htmlFor="f-test10" className="vegetables-text">Currant</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test11" />
                                <label htmlFor="f-test11" className="vegetables-text">Cherry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test12" />
                                <label htmlFor="f-test12" className="vegetables-text">Cherimoya</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test13" />
                                <label htmlFor="f-test13" className="vegetables-text">Cloudberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test14" />
                                <label htmlFor="f-test14" className="vegetables-text">Coconut</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test15" />
                                <label htmlFor="f-test15" className="vegetables-text">Cranberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test16" />
                                <label htmlFor="f-test16" className="vegetables-text">Cucumber</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test17" />
                                <label htmlFor="f-test17" className="vegetables-text">Custard apple</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test18" />
                                <label htmlFor="f-test18" className="vegetables-text">Damson</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test19" />
                                <label htmlFor="f-test19" className="vegetables-text">Date</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test20" />
                                <label htmlFor="f-test20" className="vegetables-text">Dragonfruit</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test21" />
                                <label htmlFor="f-test21" className="vegetables-text">Durian</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test22" />
                                <label htmlFor="f-test22" className="vegetables-text">Elderberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test23" />
                                <label htmlFor="f-test23" className="vegetables-text">Feijoa</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test24" />
                                <label htmlFor="f-test24" className="vegetables-text">Fig</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test25" />
                                <label htmlFor="f-test25" className="vegetables-text">Goji berry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test26" />
                                <label htmlFor="f-test26" className="vegetables-text">Gooseberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test27" />
                                <label htmlFor="f-test27" className="vegetables-text">Grape</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test28" />
                                <label htmlFor="f-test28" className="vegetables-text">Raisin</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test29" />
                                <label htmlFor="f-test29" className="vegetables-text">Grapefruit</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test30" />
                                <label htmlFor="f-test30" className="vegetables-text">Guava</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test31" />
                                <label htmlFor="f-test31" className="vegetables-text">Honeyberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test32" />
                                <label htmlFor="f-test32" className="vegetables-text">Huckleberry</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test33" />
                                <label htmlFor="f-test33" className="vegetables-text">Jabuticaba</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test34" />
                                <label htmlFor="f-test34" className="vegetables-text">Jackfruit</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test35" />
                                <label htmlFor="f-test35" className="vegetables-text">Jambul</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test36" />
                                <label htmlFor="f-test36" className="vegetables-text">Jujube</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test37" />
                                <label htmlFor="f-test37" className="vegetables-text">Juniper berry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test38" />
                                <label htmlFor="f-test38" className="vegetables-text">Kiwifruit</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test39" />
                                <label htmlFor="f-test39" className="vegetables-text">Kumquat</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test40" />
                                <label htmlFor="f-test40" className="vegetables-text">Lemon</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test41" />
                                <label htmlFor="f-test41" className="vegetables-text">Lime</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test42" />
                                <label htmlFor="f-test42" className="vegetables-text">Loquat</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test43" />
                                <label htmlFor="f-test43" className="vegetables-text">Longan</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test44" />
                                <label htmlFor="f-test44" className="vegetables-text">Lychee</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test45" />
                                <label htmlFor="f-test45" className="vegetables-text">Mango</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test46" />
                                <label htmlFor="f-test46" className="vegetables-text">Marionberry</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test47" />
                                <label htmlFor="f-test47" className="vegetables-text">Melon</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test48" />
                                <label htmlFor="f-test48" className="vegetables-text">Miracle fruit</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                       </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header orange lighten-2">Grain<p className="expander"><i className="fa fa-caret-down" aria-hidden="true"></i></p></div>
                <div className="collapsible-body">
                  <div className="row third-form">
                     <div className="col s12 card orange lighten-2">
                      <table>
                       <thead>
                         <tr>
                             <th></th>
                             <th></th>
                             <th></th>
                             <th></th>
                         </tr>
                       </thead>

                       <tbody>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test1" />
                                <label htmlFor="g-test1" className="vegetables-text">Cereal</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test2" />
                                <label htmlFor="g-test2" className="vegetables-text">Barley</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test3" />
                                <label htmlFor="g-test3" className="vegetables-text">Fonio</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test4" />
                                <label htmlFor="g-test4" className="vegetables-text">Maize</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="f-test5" />
                                <label htmlFor="f-test5" className="vegetables-text">Oats</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test6" />
                                <label htmlFor="g-test6" className="vegetables-text">Palmers grass</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test7" />
                                <label htmlFor="g-test7" className="vegetables-text">Pearl millet</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test8" />
                                <label htmlFor="g-test8" className="vegetables-text">Rice</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test9" />
                                <label htmlFor="g-test9" className="vegetables-text">Rye</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test10" />
                                <label htmlFor="g-test10" className="vegetables-text">Sorghum</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test11" />
                                <label htmlFor="g-test11" className="vegetables-text">Spelt</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test12" />
                                <label htmlFor="g-test12" className="vegetables-text">Teff</label>
                              </p>
                            </form>
                           </td>
                         </tr>
                         <tr>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test13" />
                                <label htmlFor="g-test13" className="vegetables-text">Triticale</label>
                              </p>
                            </form>
                           </td>
                           <td>
                            <form>
                              <p>
                                <input type="checkbox" id="g-test14" />
                                <label htmlFor="g-test14" className="vegetables-text">Wheat</label>
                              </p>
                            </form>
                           </td>
                           <td>
                           </td>
                           <td>
                           </td>
                         </tr>
                       </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header amber lighten-2">Animals<p className="expander"><i className="fa fa-caret-down" aria-hidden="true"></i></p></div>
                <div className="collapsible-body">
                <div className="row third-form">
                  <div className="col s12 card deep-orange accent-2">
                    <div className="row">
                    <br />

                      <div className="input-field col s4">
                        <div className="animals-label">Goats</div>
                        <select multiple>
                          <option value="" disabled>Choose your option</option>
                          <option value="1">Dairy</option>
                          <option value="2">Meat</option>
                          <option value="3">Pet</option>
                        </select>
                      </div>
                      <div className="input-field col s4">
                        <div className="animals-label">Sheep</div>
                        <select multiple>
                          <option value="" disabled>Choose your option</option>
                          <option value="1">Dairy</option>
                          <option value="2">Meat</option>
                          <option value="3">Wool</option>
                          <option value="4">Pet</option>
                        </select>
                      </div>
                      <div className="input-field col s4">
                        <div className="animals-label">Cattle</div>
                        <select multiple>
                          <option value="" disabled>Choose your option</option>
                          <option value="1">Dairy</option>
                          <option value="2">Meat</option>
                          <option value="3">Pet</option>
                        </select>
                      </div>

                    </div>
                    <div className="input-field col s4">
                      <div className="animals-label">Pigs</div>
                      <select multiple>
                        <option value="" disabled>Choose your option</option>
                        <option value="1">Meat</option>
                        <option value="2">Pet</option>
                      </select>
                    </div>
                    <div className="input-field col s4">
                      <div className="animals-label">Chickens</div>
                      <select multiple>
                        <option value="" disabled>Choose your option</option>
                        <option value="1">Eggs</option>
                        <option value="2">Meat</option>
                      </select>
                    </div>
                    <div className="input-field col s4">
                      <div className="animals-label">Llamas</div>
                      <select multiple>
                        <option value="" disabled>Choose your option</option>
                        <option value="1">Fur</option>
                        <option value="3">Pet</option>
                      </select>
                    </div>

                  </div>
                </div>
                </div>
              </li>
            </ul>
        </div>

        <div className="row third-form pick-dates">
          <div className="col s12 card light-blue lighten-3">
            <div className="row">
            <div className="col s1" />
              <div className="col s4">
                <div className="seasons-title">Pick Season Start Date</div>
                <input type="text" className="datepicker" />
              </div>
              <div className="col s1" />
              <div className="col s4">
                <div className="seasons-title">Pick Season End Date</div>
                <input type="text" className="datepicker" />
              </div>
              <div className="col s1" />
            </div>
          </div>
        </div>

        <div className="row">
           <div className="col s12" id="machine-learning-area">

           <div className="row">
            <div className="col s2" />
            <div className="col s8">
             <div className="card teal lighten-2">
               <div className="card-content white-text">
                 <span className="card-title">Add a Fruit Tour?</span>
                 <p>It looks like there are a lot of fruit growers in your area. Are you one of them?</p>
                 </div>
                 <div className="card-action">
                  <div className="row">
                    <a className="col s2 waves-effect amber darken-1 btn">button</a>
                    <div className="col s1" />
                    <a className="col s2 waves-effect amber darken-1 btn">button</a>
                    <div className="col s1" />
                    <a className="col s2 waves-effect amber darken-1 btn">button</a>
                    <div className="col s1" />
                    <a className="col s2 waves-effect amber darken-1 btn">button</a>
                  </div>
                 </div>
               </div>
              </div>
            </div>

           </div>
           <div className="col s2" />
        </div>

        <div>
          <div className="row">
            <div className="col s4" />
             <div className="col s4">
              <Link to="summary">
                <div className="waves-effect orange darken-4 btn-large complete-btn">
                  COMPLETE APPLICATION
                </div>
              </Link>
              <p className="complete-text">REVIEW YOUR FARM</p>
             </div>
            <div className="col s4" />
          </div>
        </div>

      </div>
    )
  }
}

export default SetupFarm;

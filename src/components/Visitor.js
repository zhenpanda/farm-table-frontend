import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Visitor extends Component {
  render() {
    return (
      <div>
        <h2>This is the Visitors Page...</h2>
        <h4>A List of Farms with details visitors can choose from</h4>
        <ul>
          <li>Farm 1 Details with Imgs<br /></li>
          <li>Farm 2 Details with Imgs<br /></li>
          <li>Farm 3 Details with Imgs<br /></li>
          <li>Farm 4 Details with Imgs<br /></li>
          <li>Farm 5 Details with Imgs<br /></li>
        </ul>
        <br />
        <Link to="/">
          <div className="waves-effect orange darken-4 btn-large">BOOK</div>
        </Link>
      </div>
    )
  }
}
export default Visitor;

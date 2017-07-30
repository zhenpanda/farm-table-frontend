import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Summary extends Component {
  render() {
    return (
      <div>
        <h2>This is the Farm Summary Page...</h2>
        <h4>Details of the Farm and tours on this page...</h4>
        <br />
        <Link to="/">
          <div className="waves-effect orange darken-4 btn-large">DONE</div>
        </Link>
      </div>
    )
  }
}
export default Summary;

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
    class Authentication extends Component {
      // static exists on all instance of the Class Authentication
      static contextTypes = {
        router: React.PropTypes.object
      }

      componentWillMount() {
        if(!this.props.authenticated) {
          this.context.router.push('/');
        }
      }
      // when components render with new props
      componentWillUpdate(nextProps) {
        if(!nextProps.authenticated) {
          this.context.router.push('/');
        }
      }

      render() {
        console.log("rendering composed component...");
        return <ComposedComponent {...this.props} />
      }
    }

    function mapStateToProps(state) {
      return {authenticated: state.authenticated}
    }

    return connect(mapStateToProps)(Authentication);
}

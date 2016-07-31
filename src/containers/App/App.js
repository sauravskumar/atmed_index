import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {IndexLink} from 'react-router';
// import {LinkContainer} from 'react-router-bootstrap';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import {Footer} from 'components';
// import {push} from 'react-router-redux';
import config from '../../config';
// import {asyncConnect} from 'redux-connect';
import styles from './App.scss';

// @asyncConnect([{
// promise: ({store: {dispatch, getState}}) => {
//   const promises = [];

// if (!isInfoLoaded(getState())) {
//   promises.push(dispatch(loadInfo()));
// }
// if (!isAuthLoaded(getState())) {
//   promises.push(dispatch(loadAuth()));
// }

// return Promise.all(promises);
//   }
// }])
// @connect(
// state => ({user: state.auth.user}),
// {logout, pushState: push}
// )
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  // componentWillReceiveProps(nextProps) {
  //   if (!this.props.user && nextProps.user) {
  //     // login
  //     this.props.pushState('/loginSuccess');
  //   } else if (this.props.user && !nextProps.user) {
  //     // logout
  //     this.props.pushState('/');
  //   }
  // }

  render() {
    return (
      <div>
        <Helmet {...config.app.head}/>
        <div className="container-fluid appContent">
          <div className={styles.appContent}>
            {this.props.children}
          </div>
          <div className="push"></div>
        </div>
        <Footer/>
      </div>
    );
  }
}

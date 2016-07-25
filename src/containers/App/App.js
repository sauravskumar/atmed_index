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
// import {InfoBar} from 'components';
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
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6 col-sm-push-2 col-md-push-2 col-lg-push-3" style={{marginTop: '100px'}}>
            <img src="/index-images/google.png" style={{margin: '0 auto', display: 'block', width: '100%', maxWidth: '500px'}}/>
            <div style={{margin: '0 auto', textAlign: 'center'}}>
              <input className={styles.input} type="text"/>
              <button className="btn btn-primary" style={{borderRadius: '1px'}}>Search</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <a href="/coupons" className="href">
                <img src="" alt=""/>
              </a>
            </div>
            <div className="col-xs-6">
              <a href="/trains" className="href">
                <img src="" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className={styles.appContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

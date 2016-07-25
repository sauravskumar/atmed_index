import React, {Component} from 'react';
import {Link} from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

      </div>
    );
  }
}

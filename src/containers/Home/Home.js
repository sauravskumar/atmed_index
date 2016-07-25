import React, {Component} from 'react';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';
import styles from './Home.scss';

export default class Home extends Component {
  render() {
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div>
        <Helmet title="Home"/>
        <div className="row">
          <ul className={styles.heading}>
            <li>
              <a href={"/coupons"}>Coupons</a>
            </li>
            <li><a href={"/trains"}>Trains</a></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6 col-sm-push-2 col-md-push-2 col-lg-push-3"
               style={{marginTop: '100px'}}>
            <img src="/index-images/google.png"
                 style={{margin: '0 auto', display: 'block', width: '100%', maxWidth: '500px'}}/>
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
      </div>
    );
  }
}

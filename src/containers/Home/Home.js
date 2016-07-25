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
          <div className="col-xs-12">
            <ul className={styles.heading}>
              <li>
                <a href={"/coupons"}>Coupons</a>
              </li>
              <li><a href={"/trains"}>Trains</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6 col-sm-push-2 col-md-push-2 col-lg-push-3"
               style={{marginTop: '100px', textAlign: 'center'}}>
            <img src="/index-images/atmed.png"
                 style={{margin: '0 auto', display: 'block', width: '100%', maxWidth: '450px'}}/>
            {/* <div className="form-inline" style={{marginTop: '50px'}}>
              <div className="form-group">
                <input type="text" className={'form-control ' + styles.input} id="inputPassword2"/>
              </div>
              <button type="submit" className="btn btn-primary" style={{borderRadius: '0px 5px 5px 0px'}}>Search</button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

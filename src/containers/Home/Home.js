import React, {Component} from 'react';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';
import style from './Home.scss';

export default class Home extends Component {
  render() {
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div>
        <Helmet title="Atmed"/>
        <div className="row">
          <div className="col-xs-12">
            <ul className={style.heading}>
              <li>
                <a href={"/coupons"} title="Atmed Coupons">Coupons</a>
              </li>
              <li><a href={"/trains"} title="Atmed Trains">Trains</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className={'col-xs-12 col-sm-8 col-md-8 col-lg-6 col-sm-push-2 col-md-push-2 col-lg-push-3 ' + style.imageDiv}>
            <img src="http://res.cloudinary.com/atmed/image/upload/atmed_logo" alt="Atmed Logo"
                 style={{margin: '0 auto', display: 'block', width: '80%', maxWidth: '450px'}}/>
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

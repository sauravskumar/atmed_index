import React, {Component} from 'react';
// import Helmet from 'react-helmet';
// import { MiniInfoBar } from 'components';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    // const {showKitten} = this.state;
    // const kitten = require('./kitten.jpg');
    return (
      <div>
        <div className="container">
          <br/>
          <h1 className="text-center">About Us</h1>
          <br/>
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-push-3" style={{fontSize: '14px'}}>
              Welcome to Atmed. We help our customers to save big online by providing the most new and up to date
              coupons. We also provide ours users with travel information such as train schedules, trains running
              between stations fare prices and more to help them find the best travel routes for their favourite
              destinations.
              <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

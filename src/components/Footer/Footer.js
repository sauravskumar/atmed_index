/**
 * Created by saurav on 25/7/16.
 */
import React, {PropTypes, Component} from 'react';
import style from './Footer.scss';

export default class Footer extends Component {
  static propTypes = {
    contents: PropTypes.array
  };

  render() {
    const contents = [
      {
        _id: 'About',
        url: 'https://support.amted.co/about'
      },
      {
        _id: 'Terms',
        url: 'https://support.amted.co/terms'
      },
    ];
    return (
      <footer className={'footer'} ref="footer">
        <ul>
          {contents.map(obj => {
            return (
              <li className="text-capitalize" key={Date.now() + Math.random()}>
                <a href={obj.url} className={style.links} title={obj._id} rel="nofollow">{obj._id}</a>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}

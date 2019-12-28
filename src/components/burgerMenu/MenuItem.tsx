import React from 'react';
//import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

type Props = {
  title: string;
  route: string;
  externalLink: string;
  delay: string;
  onClick(): void;
};
type State = {};

class MenuItem extends React.Component<Props, State> {
  render() {
    return (
      <div
        className="burgerMenuItem"
        style={{
          animationDelay: this.props.delay
        }}
      >
        <li
          style={{
            animationDelay: this.props.delay
          }}
        >
          {this.props.route &&
            <HashLink
              to={this.props.route + '#top'}
              onClick={this.props.onClick}
            >
              {this.props.title}
            </HashLink>}
          {this.props.externalLink &&
            <a
              href={this.props.externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.title}
            </a>}
        </li>
      </div>
    );
  }
}

export default MenuItem;

import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = { title: string; route: string; delay: string };
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
          <NavLink to={this.props.route} activeClassName="active">
            {this.props.title}
          </NavLink>
        </li>
      </div>
    );
  }
}

export default MenuItem;

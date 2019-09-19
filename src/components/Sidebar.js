import React from 'react';
import { NavLink } from "react-router-dom";


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='sidebar'>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/practicing" activeClassName="active">
            Practicing
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>;
  }
}

export default Sidebar;
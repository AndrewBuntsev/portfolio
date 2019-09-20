import React from 'react';
import CSS from 'csstype';
import MenuItem from './MenuItem';

type Props = { open: boolean };
type State = {};

class Menu extends React.Component<Props, State> {
  render() {
    const menuItems = [];
    menuItems.push(
      <MenuItem key={0} delay={`${0 * 0.1}s`} title="About" route="/" />
    );
    menuItems.push(
      <MenuItem
        key={1}
        delay={`${1 * 0.1}s`}
        title="Projects"
        route="/projects"
      />
    );
    menuItems.push(
      <MenuItem
        key={2}
        delay={`${2 * 0.1}s`}
        title="Profile"
        route="/profile"
      />
    );
    menuItems.push(
      <MenuItem
        key={3}
        delay={`${3 * 0.1}s`}
        title="Contacts"
        route="/contacts"
      />
    );

    const containerStyle: CSS.Properties = {
      position: 'fixed',
      top: '5px',
      left: '5px',
      height: this.props.open ? '200px' : 0,
      minWidth: '150px',
      maxWidth: '250px',
      width: '50vw',
      background: 'black',
      opacity: 0.95,
      borderRadius: '5px',
      transition: 'height 0.3s ease',
      zIndex: 2
    };
    return (
      <div style={containerStyle}>
        {this.props.open
          ? <ul style={{ listStyleType: 'none' }}>
              {menuItems}
            </ul>
          : null}
      </div>
    );
  }
}

export default Menu;

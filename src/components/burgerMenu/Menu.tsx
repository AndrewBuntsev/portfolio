import React from 'react';
import CSS from 'csstype';
import MenuItem from './MenuItem';
import { PAGES } from '../common/pages';

type Props = { open: boolean; onMenuItemClick(): void };
type State = {};

class Menu extends React.Component<Props, State> {
  render() {
    const menuItems = PAGES.map((page, i) =>
      <MenuItem
        key={i}
        delay={`${i * 0.1}s`}
        title={page.title}
        route={page.route}
        externalLink={page.externalLink}
        onClick={this.props.onMenuItemClick}
      />
    );

    const containerStyle: CSS.Properties = {
      position: 'fixed',
      top: '5px',
      left: '5px',
      height: this.props.open ? menuItems.length * 45 + 'px' : 0,
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

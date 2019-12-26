import React from 'react';
import CSS from 'csstype';
import MenuItem from './MenuItem';
import { PAGES } from '../common/pages';
import SocialMediaPanel from '../SocialMediaPanel';

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
      height: this.props.open ? menuItems.length * 45 + 130 + 'px' : 0,
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
          ? <div>
              <div
                style={{
                  margin: '40px 0 0 10px',
                  paddingRight: '15px',
                  fontFamily: 'Roboto',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#FFF'
                }}
              >
                Hi, my name is Andrei Buntsev and I'm a senior software
                developer. Welcome to my personal website!
              </div>

              <div style={{ textAlign: 'center', margin: '10px 0 0 0' }}>
                <SocialMediaPanel />
              </div>

              <ul style={{ listStyleType: 'none' }}>
                {menuItems}
              </ul>
            </div>
          : null}
      </div>
    );
  }
}

export default Menu;

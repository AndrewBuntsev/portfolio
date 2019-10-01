import React from 'react';

import Menu from './Menu';
import MenuButton from './MenuButton';

type Props = {};
type State = { menuOpen: boolean };

class BurgerMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleMenuItemClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <div>
        <MenuButton open={this.state.menuOpen} onClick={this.handleMenuClick} />

        <Menu
          open={this.state.menuOpen}
          onMenuItemClick={this.handleMenuItemClick}
        />
      </div>
    );
  }
}

export default BurgerMenu;

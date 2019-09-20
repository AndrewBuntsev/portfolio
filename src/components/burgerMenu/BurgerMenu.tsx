import React from "react";
import CSS from "csstype";

import MenuItem from "./MenuItem";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

//#region Styles
const conatinerStyle: CSS.Properties = {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,
  opacity: 0.9,
  display: "flex",
  alignItems: "center",
  background: "black",
  width: "40px",
  borderRadius: "3px",
  color: "white",
  fontFamily: "Lobster"
};

const logoStyle: CSS.Properties = { margin: "0 auto" };

const styles = {
  container: conatinerStyle,
  logo: logoStyle
};

//#endregion Styles

type Props = {};
type State = { menuOpen: boolean };

class BurgerMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const menu = ["About", "Projects", "Profile", "Contacts"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });

    return (
      <div style={{ gridColumn: "1" }}>
        <div style={conatinerStyle}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
      </div>
    );
  }
}

export default BurgerMenu;

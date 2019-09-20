import React from "react";
import CSS from "csstype";

type Props = { open: boolean };
type State = { open: boolean };

class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const containerStyle: CSS.Properties = {
      position: "fixed",
      top: 0,
      left: 0,
      height: this.state.open ? "100%" : 0,
      minWidth: "150px",
      width: "50vw",
      display: "flex",
      flexDirection: "column",
      background: "black",
      opacity: 0.95,
      color: "#fafafa",
      transition: "height 0.3s ease",
      zIndex: 2
    };
    return (
      <div style={containerStyle}>
        {this.state.open ? (
          <div style={{ paddingTop: "3rem" }}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Menu;

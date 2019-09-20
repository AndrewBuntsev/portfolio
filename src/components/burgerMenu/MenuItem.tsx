import React from "react";

type Props = { delay: string; onClick(): void };
type State = { hover: boolean };

class MenuItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay
      }
    };
    return (
      <div
        style={{
          opacity: 0,
          animation: "1s appear forwards",
          animationDelay: this.props.delay
        }}
      >
        <div
          style={{
            fontFamily: `'Open Sans', sans-serif`,
            fontSize: "1.2rem",
            padding: "1rem 0",
            margin: "0 5%",
            cursor: "pointer",
            color: this.state.hover ? "gray" : "#fafafa",
            transition: "color 0.2s ease-in-out",
            animation: "0.5s slideIn forwards",
            animationDelay: this.props.delay
          }}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div
          style={{
            width: "90%",
            height: "1px",
            background: "gray",
            margin: "0 auto",
            animation: "0.5s shrink forwards",
            animationDelay: this.props.delay
          }}
        />
      </div>
    );
  }
}

export default MenuItem;

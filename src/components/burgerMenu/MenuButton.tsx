import React from 'react';
import CSS from 'csstype';

const buttonStyle: CSS.Properties = {
  position: 'fixed',
  top: '5px',
  left: '5px',
  zIndex: 99,
  opacity: 0.9,
  background: 'black',
  borderRadius: '3px',
  color: 'white',
  fontFamily: 'Lobster',
  height: '32px',
  width: '32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '4px'
};

type Props = { open: boolean; onClick(): void };
type State = {};

class MenuButton extends React.Component<Props, State> {
  render() {
    const styles = {
      line: {
        height: '2px',
        width: '20px',
        background: 'white',
        transition: 'all 0.2s ease'
      },
      lineTop: {
        transform: this.props.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px'
      },
      lineMiddle: {
        opacity: this.props.open ? 0 : 1,
        transform: this.props.open ? 'translateX(-16px)' : 'none'
      },
      lineBottom: {
        transform: this.props.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px'
      }
    };
    return (
      <div style={buttonStyle} onClick={this.props.onClick}>
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

export default MenuButton;

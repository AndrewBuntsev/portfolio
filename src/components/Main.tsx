import React from 'react';

import Sidebar from './Sidebar';
import CentralPanel from './CentralPanel';
import BurgerMenu from './burgerMenu/BurgerMenu';

const BREAKPOINT_WIDTH = 1024;
type Props = {};
type State = { windowWidth: number; windowHeight: number };

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const isLargeScreen = this.state.windowWidth > BREAKPOINT_WIDTH;
    return (
      <div
        className="mainPanel"
        style={{
          gridTemplateColumns: isLargeScreen ? '310px 4fr' : 'auto 4fr'
        }}
      >
        {isLargeScreen && <Sidebar />}
        {!isLargeScreen && <BurgerMenu />}

        <CentralPanel />
      </div>
    );
  }
}

export default Main;

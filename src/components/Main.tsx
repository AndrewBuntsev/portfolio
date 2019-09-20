import React from 'react';

import Sidebar from './Sidebar';
import CentralPanel from './CentralPanel';
import BurgerMenu from './burgerMenu/BurgerMenu';

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
    return (
      <div className="mainPanel">
        {this.state.windowWidth > 768 && <Sidebar />}
        {this.state.windowWidth <= 768 && <BurgerMenu />}

        <CentralPanel />
      </div>
    );
  }
}

export default Main;

import React from "react";

import Sidebar from "./Sidebar";
import CentralPanel from "./CentralPanel";
import BurgerMenu from "./burgerMenu/BurgerMenu";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainPanel">
        <BurgerMenu></BurgerMenu>
        <Sidebar />
        <CentralPanel />
      </div>
    );
  }
}

export default Main;

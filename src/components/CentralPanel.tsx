import React from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Projects from './Projects';
import Recommendations from './Recommendations';
import PhoenixProj from './projects/PhoenixProj';
import ATSProj from './projects/ATSProj';
import OrionProj from './projects/OrionProj';
import TILProj from './projects/TILProj';
import Experiences from './experiences/Experiences';

class CentralPanel extends React.Component {
  render() {
    return (
      <div className="centralPanel">
        <Route exact path="/" component={About} />
        {/* <Route exact path="/contacts" component={Contact} /> */}
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/recommendations" component={Recommendations} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/phoenix" component={PhoenixProj} />
        <Route exact path="/projects/ats" component={ATSProj} />
        <Route exact path="/projects/orion" component={OrionProj} />
        <Route exact path="/projects/til" component={TILProj} />
      </div>
    );
  }
}

export default CentralPanel;

import React from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import PhoenixProj from './projects/PhoenixProj';
import ATSProj from './projects/ATSProj';

class CentralPanel extends React.Component {
  render() {
    return (
      <div className="centralPanel">
        <Route exact path="/" component={About} />
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/phoenix" component={PhoenixProj} />
        <Route exact path="/projects/ats" component={ATSProj} />
      </div>
    );
  }
}

export default CentralPanel;

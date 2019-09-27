import React from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import PhoenixProj from './projects/PhoenixProj';

class CentralPanel extends React.Component {
  render() {
    return (
      <div className="centralPanel">
        <Route exact path="/" component={About} />
        <Route exact path="/contacts" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/phoenix" component={PhoenixProj} />
      </div>
    );
  }
}

export default CentralPanel;

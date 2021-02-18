import React from 'react';
import PhoenixCard from './projects/PhoenixCard';
import ATSCard from './projects/ATSCard';
import OrionCard from './projects/OrionCard';
import TILCard from './projects/TILCard';
import MLCard from './projects/MLCard';
import { Grid } from '@material-ui/core';


class Projects extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">Projects</h2>
        <hr className="hr" />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <PhoenixCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ATSCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OrionCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TILCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <MLCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Projects;

import React from 'react';
import PhoenixCard from './projects/PhoenixCard';
import { Grid } from '@material-ui/core';
import ATSCard from './projects/ATSCard';

class Projects extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <PhoenixCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ATSCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhoenixCard />
        </Grid>
      </Grid>
    );
  }
}

export default Projects;

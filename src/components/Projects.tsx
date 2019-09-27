import React from 'react';
import PhoenixCard from './projects/PhoenixCard';
import { Grid } from '@material-ui/core';

class Projects extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <PhoenixCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhoenixCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PhoenixCard />
        </Grid>
      </Grid>
    );
  }
}

export default Projects;

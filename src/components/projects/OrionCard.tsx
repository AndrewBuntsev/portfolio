import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

class OrionCard extends React.Component {
  render() {
    return (
      <Card style={{ maxWidth: '345px' }}>
        <CardActionArea>
          <NavLink
            to="/projects/orion"
            activeClassName="active"
            className="ProjectsLearnMoreLink"
          >
            <CardMedia
              style={{ height: '140px', margin: '5px' }}
              image={require('./img/Orion/orion.png')}
              title="Learn More"
            />
          </NavLink>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Phoenix Orion
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Web Application built using the following technologies: JavaScript,
              React, Redux, TypeScript, Bootstrap, NodeJS, ExpressJS, PM2
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <NavLink
              to="/projects/orion"
              activeClassName="active"
              className="ProjectsLearnMoreLink"
            >
              Learn More
            </NavLink>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default OrionCard;

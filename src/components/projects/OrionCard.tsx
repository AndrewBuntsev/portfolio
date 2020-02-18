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
      <NavLink
        to="/projects/orion"
        activeClassName="active"
        className="ProjectsLearnMoreLink"
      >
        <Card style={{ maxWidth: '345px' }}>
          <CardActionArea>
            <CardMedia
              style={{ height: '140px', margin: '5px' }}
              image={require('./img/Orion/orion.png')}
              title="Learn More"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Phoenix Orion
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Web Application built using the following technologies:
                JavaScript, React, Redux, TypeScript, Bootstrap, NodeJS,
                ExpressJS, PM2
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </NavLink>
    );
  }
}

export default OrionCard;

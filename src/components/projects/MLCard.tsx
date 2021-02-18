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

class MLCard extends React.Component {
  render() {
    return (
      <NavLink
        to="/projects/ml"
        activeClassName="active"
        className="ProjectsLearnMoreLink"
      >
        <Card style={{ maxWidth: '345px' }}>
          <CardActionArea>
            <CardMedia
              style={{ height: '140px', margin: '5px' }}
              image={require('./img/ML/logo.png')}
              title="Learn More"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Milieu Labs
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Smart Thermostat full cycle manufactoring, including hardware assembling,
                firmware development, mobile apps, web dev, AWS backend, IoT, voice assistants
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

export default MLCard;

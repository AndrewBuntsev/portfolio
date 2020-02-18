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

class PhoenixCard extends React.Component {
  render() {
    return (
      <NavLink
        to="/projects/phoenix"
        activeClassName="active"
        className="ProjectsLearnMoreLink"
      >
        <Card style={{ maxWidth: '345px' }}>
          <CardActionArea>
            <CardMedia
              style={{ height: '140px', margin: '5px' }}
              image={require('./img/Phoenix/PresentationStack.png')}
              title="Learn More"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Phoenix
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Desktop Application built using the following technologies:
                .NET, C#, WPF, MVVM, WCF, 3-tier architecture, Microsoft SQL
                Server.
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

export default PhoenixCard;

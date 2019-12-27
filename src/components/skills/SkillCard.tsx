import React from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';

type Props = {
  title: string;
  img: string;
};

type State = {};

class SkillCard extends React.Component<Props, State> {
  render() {
    return (
      <Card style={{ width: '40px', margin: '10px' }} title={this.props.title}>
        <CardActionArea>
          <CardMedia style={{ height: '30px', width: '30px', margin: 'auto' }} image={this.props.img} />
        </CardActionArea>
      </Card>
    );
  }
}

export default SkillCard;

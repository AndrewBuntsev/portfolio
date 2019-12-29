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
      <Card
        style={{ width: '120px', margin: '5px 10px 0 10px' }}
        title={this.props.title}
      >
        <CardActionArea>
          <CardMedia
            style={{ height: '30px', width: '30px', margin: 'auto' }}
            image={this.props.img}
          />
        </CardActionArea>
        <span style={{ textAlign: 'center', display: 'block', margin: 'auto' }}>
          {this.props.title}
        </span>
      </Card>
    );
  }
}

export default SkillCard;

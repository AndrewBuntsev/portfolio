import React from 'react';

type Props = {
  link: string;
  picture: string;
  name: string;
  position: string;
  recommendation: string;
};
type State = {};
class RecommendationCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="recommendationCard">
        <a href={this.props.link} target="_blank">
          <img
            style={{ borderRadius: '50%', marginTop: '15px' }}
            src={require('./../assets/recommendations/' + this.props.picture)}
            width="60"
          />
        </a>
        <div
          style={{
            width: '180px',
            margin: '20px 15px 0 15px'
          }}
        >
          <span style={{ fontWeight: 'bold' }}>
            {this.props.name}
          </span>
          <br />
          <span style={{ fontSize: '12px' }}>
            {this.props.position}
          </span>
        </div>
        <div style={{}}>
          <blockquote />
          <div
            style={{
              marginTop: '-15px',
              width: 'auto',
              maxWidth: '600px',
              fontStyle: 'italic',
              textAlign: 'justify',
              textJustify: 'inter-word',
              color: '#222'
            }}
          >
            {this.props.recommendation}
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendationCard;

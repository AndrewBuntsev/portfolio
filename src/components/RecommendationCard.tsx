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
  render() {
    return (
      <div className="recommendationCard">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img
            style={{ borderRadius: '50%', marginTop: '15px' }}
            alt="person"
            src={require('./../assets/recommendations/' + this.props.picture)}
            width="60"
          />
        </a>
        <a
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: '#000000' }}
        >
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
        </a>
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

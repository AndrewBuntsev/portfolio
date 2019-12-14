import React from 'react';
import PhoenixCard from './projects/PhoenixCard';
import ATSCard from './projects/ATSCard';
import OrionCard from './projects/OrionCard';
import { Grid } from '@material-ui/core';
import RecommendationCard from './RecommendationCard';

class Recommendations extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">Recommendations</h2>
        <hr className="hr" />
        <RecommendationCard
          link="https://www.linkedin.com/in/adrianprz/"
          picture="Adrian.jpg"
          name='Adrian Przelozny'
          position='CEO at Independent Reserve'
          recommendation='Andrei has worked as a Senior Software Engineer for Asia-Australia
          Technology for over 10 years. During this time, he has worked on
          various complex software development projects. Andrei has
          demonstrated strong software development skills along with a great
          work ethic and English communication skills. He is an integral
          member of our team. I would happily re-employ Andrei as I consider
          him to be a valuable member of the team, who consistently achieved
          good results and delivers all expectations.'
        />

      <RecommendationCard
          link="https://www.linkedin.com/in/geoffrey-h-b4214a13/"
          picture="Geoffrey.jpg"
          name='Geoffrey Hall'
          position='Technical Development Lead at Nine'
          recommendation='I have worked directly with Andrei over the past year and I have found him to be diligent, 
          dependable and accurate in his estimations.
          He seeks to understand the space that he works in and produces high quality work in a timely fashion.
          Andrei comes with a strong recommendation.'
        />
      </div>
    );
  }
}

export default Recommendations;

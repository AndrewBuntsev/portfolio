import React from 'react';

type Props = {
  title: string;
  children?: any;
};

export default function SkillsGroup(props: Props) {
  return (
    <div>
      <h4
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '18px',
          lineHeight: '19.8px',
          color: '#434242',
          margin: '30px 0 5px 0'
        }}
      >
        {props.title}
      </h4>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          border: '1px whate solid'
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

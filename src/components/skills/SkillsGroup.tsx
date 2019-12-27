import React, { CSSProperties } from 'react';

const styles: {
  title: CSSProperties;
} = {
  title: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '18px',
    lineHeight: '19.8px',
    color: '#434242',
    margin: '10px 0 5px 0'
  }
};

type Props = {
  title: string;
  children?: any;
};

export default function SkillsGroup(props: Props) {
  return (
    <div>
      <h4 style={styles.title}>
        {props.title}
      </h4>
      <div style={{ display: 'flex' }}>
        {props.children}
      </div>
    </div>
  );
}

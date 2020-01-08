import React, { CSSProperties } from 'react';
import { Link, LocationOn } from '@material-ui/icons';

const styles: {
  title: CSSProperties;
  dates: CSSProperties;
  subtitle: CSSProperties;
  details: CSSProperties;
  locationLink: CSSProperties;
  location: CSSProperties;
  link: CSSProperties;
} = {
  title: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '18px',
    lineHeight: '19.8px',
    color: '#434242',
    margin: '10px 0 5px 0'
  },
  dates: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '15px',
    lineHeight: '24.6px',
    color: '#434242',
    margin: '0 0 10px 0'
  },
  subtitle: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '15px',
    lineHeight: '24.6px',
    color: '#434242',
    display: 'block',
    margin: '10px 0 10px 0'
  },
  details: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '15px',
    lineHeight: '24.6px',
    color: '#434242',
    margin: '0 0 10px 0',
    textAlign: 'justify'
  },
  locationLink: {
    fontFamily: '"Open Sans", sans-serif',
    color: '#22A39F',
    fontSize: '15px',
    verticalAlign: 'top',
    lineHeight: '1.64'
  },
  location: { verticalAlign: 'super' },
  link: { verticalAlign: 'super', marginLeft: '5px' }
};

type Props = {
  title: string;
  icon?: any;
  dates: string;
  subtitle: string;
  location: string;
  link: string;
  children?: any;
};

export default function ExperienceSection(props: Props) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridColumnGap: '50px',
        padding: '0 0 30px 0'
      }}
    >
      <div>
        {props.icon &&
          <img
            src={props.icon}
            alt="experience"
            style={{
              width: '30px',
              borderRadius: '3px',
              float: 'left',
              margin: '4px 3px 0 0'
            }}
          />}
        <h4 style={styles.title}>
          {props.title}
        </h4>
        <p style={styles.dates}>
          {props.dates}
        </p>
      </div>
      <div style={{ gridColumn: 'span 2' }}>
        <strong style={styles.subtitle}>
          {props.subtitle}
        </strong>
        <div style={styles.details}>
          {props.children}
        </div>
        <div style={styles.locationLink}>
          <LocationOn />
          <span style={styles.location}>
            {props.location}
          </span>
          <span style={{ verticalAlign: 'super' }}>&nbsp;|&nbsp;</span>
          <Link />
          <span style={styles.link}>
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#22A39F', textDecoration: 'none' }}
            >
              {props.link}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

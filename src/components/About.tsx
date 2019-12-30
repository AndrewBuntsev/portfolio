import React, { CSSProperties } from 'react';
import SkillsPanel from './skills/SkillsPanel';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const linkStyle: CSSProperties = {
  color: '#145DA0',
  fontWeight: 'bold',
  textDecoration: 'none'
};

const P = styled.p`text-align: justify;`;

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title" id="top">
          About Me
        </h2>
        <hr className="hr" />

        <img
          src={require('../assets/images/ava_main.png')}
          alt="Main Ava"
          width="250"
          style={{ float: 'right', borderRadius: '5px', marginLeft: '10px' }}
        />
        <P>
          I started my IT career working as a system administrator at Russian
          Railways in 2005. I instantly fell in love with computers, networks,
          information systems and anything related to IT. After about a year I
          discovered that my real passion was programming. I started coding
          using different languages - VB, Perl, JavaScript, CiCode, C#, 1C,
          Lisp, Flash. Being a junior, I tried every programming language I
          heard about. Of course, not everything has gone to production..
        </P>

        <P>
          For the last 10 years I have been employed by an Australian employer
          (Asia-Australia Technology). During my tenure I evolved from a junior
          to a Senior Full Stack Developer, participated in about 8 various
          projects as a Front End / Back End / Full Stack developer (<HashLink
            to="/experiences#careersHeader"
            style={linkStyle}
          >
            Experiences
          </HashLink>). Most of work was done remotely from Russia until I made
          the move to Australia in December 2017 to work full time for Nine
          Entertainment Co.
        </P>

        <P>
          At that time my preferable stack was desktop-oriented client-server
          apps (.NET, C#, WPF, WCF, MSSQL). Once commencing full time work for
          Channel Nine I found myself really passionate about programming in
          JavaScript and now spend the majority of my time as a Full Stack
          JavaScript Developer developing web-based{' '}
          <NavLink to="/projects/orion" style={linkStyle}>
            apps
          </NavLink>{' '}
          using NodeJS, ExpressJS, React, Redux & TypeScript technologies.
        </P>

        <hr className="hr" />
        <h3 className="subtitle">Skills</h3>
        <SkillsPanel />

        {/* <hr className="hr" />
        <h3 className="subtitle">Languages</h3>

        <hr className="hr" />
        <h3 className="subtitle">Hobbies</h3> */}
      </div>
    );
  }
}

export default About;

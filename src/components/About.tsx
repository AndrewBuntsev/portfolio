import React, { CSSProperties } from 'react';
import SkillsPanel from './skills/SkillsPanel';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const linkStyle: CSSProperties = { color: '#145DA0', fontWeight: 'bold', textDecoration: 'none' };

const P = styled.p`
  text-align: justify;
`;

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title" id='top'>About Me</h2>
        <hr className="hr" />

        <img
          src={require('../assets/images/ava_main.png')}
          alt="Main Ava"
          width="250"
          style={{ float: 'right', borderRadius: '5px', marginLeft: '10px' }}
        />
        <P>
          I started my IT career working as a system administrator at Russian
          Railways Branch in 2005. Back then, I fell in love with computers,
          networks, information systems and anything related to IT. After about
          a year I discovered that my real passion was programming. I started
          coding using different languages - VB, Perl, JavaScripr, CiCode, C#,
          1C, Lisp, Flash. Being a junior, I tried every programming language I
          heard about. Of course, not everything has gone to production..
        </P>

        <P>
          After a while, I was hired by the Australian employer (Asia-Australia
          Technology), and was working as a developer for 10 years. During that
          time I evolved from junior to Senior Full Stack Developer,
          participated in about 8 various projects as Front End / Back End /
          Full Stack developer (<HashLink
            to="/experiences#careersHeader"
            style={linkStyle}
          >
            Experiences
          </HashLink>). Most of work has been done by me remotely because I lived
          in Russia until 2017.
        </P>

        <P>
          By the time I moved to Australia (Dec 2017) my preferable stack was
          desktop-oriented client-server apps (.NET, C#, WPF, WCF, MSSQL).
          Starting working for Channel Nine I found myself really passionate
          about programming in JavaScript. So currently being a Full Stack
          JavaScript Developer, I develop web-based{' '}
          <NavLink
            to="/projects/orion"
            style={linkStyle}
          >
            apps
          </NavLink>{' '}
          using NodeJS, ExpressJS, React, Redux, TypeScript technologies.
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

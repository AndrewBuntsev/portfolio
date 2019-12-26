import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 className="title">About Me</h2>
        <hr className="hr" />

        <img
          src={require('../assets/images/ava_main.png')}
          width="250"
          style={{ float: 'right', borderRadius: '5px', marginLeft: '10px' }}
        />
        <p style={{ textAlign: 'justify' }}>
          I started my IT career working as a system administrator at Russian
          Railways Branch in 2005. Back then, I fell in love with computers,
          networks, information systems and anything related to IT. After about
          a year I discovered that my real passion was programming. I started
          coding using different languages - VB, Perl, JavaScripr, CiCode, C#,
          1C, Lisp, Flash. Being a junior, I tried every programming language I
          heard. Of course, not everything has gone to production..
        </p>

        <p style={{ textAlign: 'justify' }}>
          After a while, I was hired by the Australian employer (Asia-Australia
          Technology), and was working as a developer for 10 years. During that
          time I evolved from junior to Senior Full Stack Developer,
          participated in about 8 various projects as Front End / Back End /
          Full Stack developer. [Experience] Most of work has been done by me
          remotely because I lived in Russia until 2017.
        </p>

        <p style={{ textAlign: 'justify' }}>
          By the time I moved to Australia (Dec 2017) my preferable stack was
          desktop-oriented client-server apps (.NET, C#, WPF, WCF, MSSQL).
          Starting working for Channel Nine I found myself really passionate
          about programming in JavaScript. So currently being a Full Stack
          JavaScript Developer, I develop web-based [apps] using NodeJs,
          ExpressJS, React, Redux, TypeScript technologies.
        </p>

        <hr className="hr" />
        <h3 className="subtitle">Skills</h3>

        <hr className="hr" />
        <h3 className="subtitle">Languages</h3>

        <hr className="hr" />
        <h3 className="subtitle">Hobbies</h3>
      </div>
    );
  }
}

export default About;

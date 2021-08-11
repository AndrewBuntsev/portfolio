import React from 'react'

const THUMBNAIL_WIDTH = '350px'

class TILProj extends React.Component {
  render() {
    return (
      <div className='zoom-gallery phoenix-zoom-gallery'>
        <h3 id='top'>Project Description</h3>
        <p>
          Today I Learned is an open-source project that exists to catalogue the sharing & accumulation of knowledge as it happens day-to-day.
          Posts have a 200-word limit, and posting is open to anyone who is interested to share their learning process.
        </p>
        <p>
          <a
            href='https://today-i-learned.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={require('./img/TIL/til.jpg')}
              alt='Today I Learned'
              width={THUMBNAIL_WIDTH}
              style={{ margin: 'auto', display: 'block', border: '1px transparent solid', borderRadius: '7px' }}
            />
            <span style={{ display: 'flex', justifyContent: 'center' }}>
              <span style={{ marginTop: '10px' }}>https://today-i-learned.org</span>
            </span>
          </a>
        </p>

        <h3>Technical details</h3>

        <p>
          <span className='techDetailsSubHeader'>Front End</span>
          Today I Learned is a React-based web application. <br />
          Redux is used as the state management system. <br />
          About 80% modules are written in TypeScript. <br />
          OAuth2 authorization via LinkedIn & GitHub API. <br />
          <br />
        </p>

        <p>
          <span className='techDetailsSubHeader'>Back End</span>
          Backend is based on the NodeJS runtime. <br />
          Backend API is built using ExpressJS. <br />
          Database: MySQL. <br />
          As a logging system used{' '}
          <a
            href='https://github.com/winstonjs/winston'
            target='_blank'
            rel='noopener noreferrer'
          >
            Winston
          </a>.
        </p>

        <p>
          <span className='techDetailsSubHeader'>
            Continuous Integration and Deployment
          </span>
          AWS.<br />
          Services used: CodeDeploy, CodePipeline, EC2, RDS, S3, Cognito<br />
          Source Code: <a
            href='https://github.com/AndrewBuntsev/til'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/AndrewBuntsev/til
          </a>.
        </p>

        <h3>My Role in the project</h3>
        <p>
          Today I Learned is my personal project, so I work on it on my own.
        </p>
      </div>
    )
  }
}

export default TILProj

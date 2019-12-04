import React from 'react'
import * as $ from 'jquery'

const THUMBNAIL_WIDTH = '250px'

class OrionProj extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='zoom-gallery phoenix-zoom-gallery'>
        <h3>Project Description</h3>
        <p>
          The Phoenix Orion project represents the reworked version of the old
          fashioned <a href='/PhoenixProj'>Phoenix</a> desktop app. The main
          purpose of its creation was to display several presentation stacks on
          the screen at the same time. Besides that significant performance
          improvent has been achieved.
        </p>
        <p>
          <a href='http://server.andreibuntsev.com:8080/' target='_blank'>
            The demo version
          </a>{' '}
          demonstrates some functions. The data is available for a week period.
        </p>

        <h3>Technical details</h3>
        <p>
          Phoenix is a windows desktop application that originally was developed
          using WPF 3.5 then gradually was migrated to the .NET platform
          versions 4.0, 4.5, 4.7.2. The application is used for Nine
          Entertainment Company’s internal purposes, average number of users
          about 500 throughout Australia.
        </p>

        <h3>My Role in the project</h3>
        <p>
          I have been working on Phoenix since 2011, started as developer, then
          senior developer, currently being a lead developer / system architect.
          At least 50% of code has been written by me.
        </p>
      </div>
    )
  }
}

export default OrionProj

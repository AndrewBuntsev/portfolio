import React from 'react'
import { NavLink } from 'react-router-dom'
import * as $ from 'jquery'
import { ROUTE_PREFIX } from '../../settings'

const THUMBNAIL_WIDTH = '350px'

class OrionProj extends React.Component {
  render() {
    return (
      <div className='zoom-gallery phoenix-zoom-gallery'>
        <h3 id='top'>Project Description</h3>
        <p>
          The Phoenix Orion project represents the reworked version of the old
          fashioned{' '}
          <NavLink to='/projects/phoenix' activeClassName='active'>
            Phoenix
          </NavLink>{' '}
          desktop app. The main purpose of its creation was to display several
          presentation stacks on the screen at the same time. Besides that,
          significant performance improvement has been achieved.
        </p>
        <p>
          <a
            href={ROUTE_PREFIX + '/img/projects/Orion/orion.png'}
            data-source={ROUTE_PREFIX + 'img/projects/Orion/orion.png'}
            title='Phoenix Orion'
            className='zoom-item'
          >
            <img
              src={require('./img/Orion/orion.png')}
              alt='Phoenix Orion'
              width={THUMBNAIL_WIDTH}
              style={{ margin: 'auto', display: 'block' }}
            />
          </a>
        </p>
        <p>
          <a
            href='http://orion-demo.andreibuntsev.com:8080/'
            target='_blank'
            rel='noopener noreferrer'
          >
            The demo version
          </a>{' '}
          demonstrates some functions. The data is available for a week period.
        </p>

        <h3>Technical details</h3>

        <p>
          <span className='techDetailsSubHeader'>Front End</span>
          Phoenix Orion is a React-based web application created with using the
          'create-react-app' tool. <br />
          Redux is used as the state management system. <br />
          About 80% modules are written in TypeScript. <br />
          Most used UI elements of 'react-bootstrap' library. <br />
          Styling is implemented with Sassy CSS (.scss) and inline styles.{' '}
          <br />
        </p>

        <p>
          <span className='techDetailsSubHeader'>Back End</span>
          Backend is based on the NodeJS runtime. <br />
          Backend API is built using ExpressJS. <br />
          In actual application MSSQL Server is used as DB server, but for demo
          purposes a piece of data has been transferred into MongoDB. <br />
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
          Continuous integration tool: TeamCity. <br />
          Pre-deployment tasks: Octopus Deploy. <br />
          Actual NodeJS deployment: PM2. <br />
          Source Code: <a
            href='https://github.com/AndrewBuntsev/phoenix-pres-centre/tree/qat'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/AndrewBuntsev/phoenix-pres-centre/tree/qat
          </a>.
        </p>

        <h3>My Role in the project</h3>
        <p>
          Initially I came up with the idea of creating Web-based Phoenix in May
          2019. After a month of discussions with directors and users I started
          development from scratch in June 2019 as the only developer. Since
          October 2019 2 more guys joined the team on a part-time basis. The
          first production release has been done in December 2019.
        </p>
      </div>
    )
  }

  componentDidMount() {
    $(document).ready(function () {
      if (!window.$) {
        window.location.replace('/projects')
      }
      window.$('.phoenix-zoom-gallery').magnificPopup({
        delegate: '.zoom-item',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true,
          titleSrc: function (item) {
            return (
              item.el.attr('title') +
              ' &middot; <a class="image-source-link" href="' +
              item.el.attr('data-source') +
              '" target="_blank">image source</a>'
            )
          }
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function (element) {
            return element.find('img')
          }
        }
      })
    })
  }
}

export default OrionProj

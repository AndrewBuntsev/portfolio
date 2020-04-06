import React from 'react'
import { HashLink } from 'react-router-hash-link'
import * as $ from 'jquery'

import ExperienceSection from './ExperienceSection'
import { ROUTE_PREFIX } from '../../settings'

const CERT_WIDTH = 100
const styles = {
  galleryImg: {
    display: 'block',
    marginLeft: '20px'
  }
}

class Experiences extends React.Component {
  render () {
    return (
      <div className='zoom-gallery experiences-zoom-gallery'>
        <h2 className='title' id='top'>
          Experiences
        </h2>
        <hr className='hr' />
        <h3 className='subtitle'>Educations</h3>

        <ExperienceSection
          title='Siberian State University of Geosystems and Technologies'
          dates='2002	- 2004'
          subtitle='Bachelor - Economics and Management'
          location='Russian Federation, Novosibirsk'
          link='https://sgugit.ru/en/'
        />

        <ExperienceSection
          title='Novosibirsk State University (NSU)'
          dates='1999 - 2002'
          subtitle='Automotive Engineering Technology/Technician'
          location='Russian Federation, Novosibirsk'
          link='http://www.elglish.nsu.ru/'
        />

        <hr className='hr' />
        <h3 className='subtitle'>Certifications</h3>

        <ExperienceSection
          title='CS50 Harvard'
          icon={require('./../../assets/images/cs50Icon.png')}
          dates='Apr 2020'
          subtitle='Mobile App Development with React Native'
          location='Online'
          link='https://certificates.cs50.io/c1ef2edd-64c9-49d0-8221-33737f0012c5.pdf'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/cs50-reactNative.png'}
            data-source={ROUTE_PREFIX + 'img/certs/cs50-reactNative.png'}
            title='CS50 Harvard - React Native'
          >
            <img
              src={require('./img/cs50-reactNative.png')}
              alt='CS50 Harvard - React Native'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
        </ExperienceSection>

        <ExperienceSection
          title='Free Code Camp'
          icon={require('./../../assets/images/freeCodeCampIcon.png')}
          dates='Apr 2019'
          subtitle='Front End Libraries'
          location='Online'
          link='https://www.freecodecamp.org/certification/andreibuntsev/front-end-libraries'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/fcc-fromtEndLibraries.png'}
            data-source={ROUTE_PREFIX + 'img/certs/fcc-fromtEndLibraries.png'}
            title='FreeCodeCamp - Front End Libraries'
          >
            <img
              src={require('./img/fcc-fromtEndLibraries.png')}
              alt='FreeCodeCamp - Front End Libraries'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
        </ExperienceSection>

        <ExperienceSection
          title='Free Code Camp'
          icon={require('./../../assets/images/freeCodeCampIcon.png')}
          dates='Feb 2019'
          subtitle='Responsive Web Design'
          location='Online'
          link='https://www.freecodecamp.org/certification/andreibuntsev/responsive-web-design'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/fcc-responsiveWebDesign.png'}
            data-source={ROUTE_PREFIX + 'img/certs/fcc-responsiveWebDesign.png'}
            title='FreeCodeCamp - Responsive Web Design'
          >
            <img
              src={require('./img/fcc-responsiveWebDesign.png')}
              alt='FreeCodeCamp - Responsive Web Design'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
        </ExperienceSection>

        <ExperienceSection
          title='Free Code Camp'
          icon={require('./../../assets/images/freeCodeCampIcon.png')}
          dates='Jan 2019'
          subtitle='JavaScript Algorithms and Data Structures'
          location='Online'
          link='https://www.freecodecamp.org/certification/andreibuntsev/javascript-algorithms-and-data-structures'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/fcc-algAndDataStruct.png'}
            data-source={ROUTE_PREFIX + 'img/certs/fcc-algAndDataStruct.png'}
            title='FreeCodeCamp - JavaScript Algorithms and Data Structures'
          >
            <img
              src={require('./img/fcc-algAndDataStruct.png')}
              alt='FreeCodeCamp - JavaScript Algorithms and Data Structures'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
        </ExperienceSection>

        <ExperienceSection
          title='Free Code Camp'
          icon={require('./../../assets/images/freeCodeCampIcon.png')}
          dates='Sep 2019'
          subtitle='APIs and Microservices'
          location='Online'
          link='https://www.freecodecamp.org/certification/andreibuntsev/apis-and-microservices'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/fcc-APIs.png'}
            data-source={ROUTE_PREFIX + 'img/certs/fcc-APIs.png'}
            title='FreeCodeCamp - APIs and Microservices'
          >
            <img
              src={require('./img/fcc-APIs.png')}
              alt='FreeCodeCamp - APIs and Microservices'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
        </ExperienceSection>

        <ExperienceSection
          title='Microsoft'
          icon={require('./../../assets/images/microsoftIcon.png')}
          dates='Oct 2013'
          subtitle='70-486: Developing ASP.NET MVC Web Applications'
          location='Online'
          link='https://mcp.microsoft.com/Anonymous//Transcript/Validate'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/ms-MCP.png'}
            data-source={ROUTE_PREFIX + 'img/certs/ms-MCP.png'}
            title='Microsoft Certified Professional'
          >
            <img
              src={require('./img/ms-MCP.png')}
              alt='Microsoft Certified Professional'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
          <i>Transcript ID: 929900; Access Code: abuntsev2010</i>
        </ExperienceSection>

        <ExperienceSection
          title='Microsoft'
          icon={require('./../../assets/images/microsoftIcon.png')}
          dates='Dec 2011'
          subtitle='70-511: TS: Windows Applications Development with Microsoft .NET Framework 4'
          location='Online'
          link='https://mcp.microsoft.com/Anonymous//Transcript/Validate'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/ms-WinApp.png'}
            data-source={ROUTE_PREFIX + 'img/certs/ms-WinApp.png'}
            title='Microsoft Certified Technology Specialist'
          >
            <img
              src={require('./img/ms-WinApp.png')}
              alt='Microsoft Certified Technology Specialist'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
          <i>Transcript ID: 929900; Access Code: abuntsev2010</i>
        </ExperienceSection>

        <ExperienceSection
          title='Microsoft'
          icon={require('./../../assets/images/microsoftIcon.png')}
          dates='Sep 2011'
          subtitle='70-502: TS: Microsoft .NET Framework 3.5, Windows Presentation Foundation Application Development'
          location='Online'
          link='https://mcp.microsoft.com/Anonymous//Transcript/Validate'
        >
          <i>Transcript ID: 929900; Access Code: abuntsev2010</i>
        </ExperienceSection>

        <ExperienceSection
          title='Microsoft'
          icon={require('./../../assets/images/microsoftIcon.png')}
          dates='Sep 2010'
          subtitle='70-505: TS: Microsoft .NET Framework 3.5, Windows Forms Application Development'
          location='Online'
          link='https://mcp.microsoft.com/Anonymous//Transcript/Validate'
        >
          <i>Transcript ID: 929900; Access Code: abuntsev2010</i>
        </ExperienceSection>

        <ExperienceSection
          title='Microsoft'
          icon={require('./../../assets/images/microsoftIcon.png')}
          dates='Mar 2010'
          subtitle='70-433: TS: Microsoft SQL Server 2008, Database Development'
          location='Online'
          link='https://mcp.microsoft.com/Anonymous//Transcript/Validate'
        >
          <a
            className='gallery-item'
            href={ROUTE_PREFIX + '/img/certs/ms-SQL.png'}
            data-source={ROUTE_PREFIX + 'img/certs/ms-SQL.png'}
            title='Microsoft Certified Technology Specialist'
          >
            <img
              src={require('./img/ms-SQL.png')}
              alt='Microsoft Certified Technology Specialist'
              width={CERT_WIDTH}
              style={styles.galleryImg}
            />
          </a>
          <i>Transcript ID: 929900; Access Code: abuntsev2010</i>
        </ExperienceSection>

        <hr className='hr' />
        <h3 className='subtitle' id='careersHeader'>
          Careers
        </h3>

        <ExperienceSection
          title='Nine Entertainment Co'
          dates='May 2019	- to-date'
          subtitle='Senior FullStack Developer'
          location='Australia, Sydney'
          link='http://www.nine.com.au'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Phoenix Orion - Reworked web version of the old-fashioned Phoenix
              desktop application.
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Initially I came up with the idea of creating Web-based Phoenix in
              May 2019. After a month of discussions with directors and users I
              started development from scratch in June 2019 as the only
              developer. Since October 2019, 2 more guys joined the team on a
              part-time basis. The{' '}
              <a
                href='http://orion-demo.andreibuntsev.com:8080'
                target='_blank'
                rel='noopener noreferrer'
              >
                demo version
              </a>{' '}
              demonstrates some functions. The data is available for a week
              period. The first production release has been done in December
              2019. Phoenix Orion is a React-based web application created with
              using the 'create-react-app' tool. Redux is used as the state
              management system. About 80% modules are written in TypeScript.
              Most used UI elements of 'react-bootstrap' library. Styling is
              implemented with Sassy CSS (.scss) and inline styles. Backend is
              based on the NodeJS runtime. Backend API is built using ExpressJS.
              In actual application MSSQL Server is used as DB server, but for
              demo purposes a piece of data has been transferred into MongoDB.
              As a logging system{' '}
              <a
                href='https://github.com/winstonjs/winston'
                target='_blank'
                rel='noopener noreferrer'
              >
                Winston
              </a>{' '}
              is used. Detailed project description and screenshots could be
              found{' '}
              <HashLink to='/projects/orion#top' activeClassName='active'>
                here
              </HashLink>{' '}
              .
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>
              JavaScript, TypeScript, NodeJS, ExpressJS, MSSQL, MongoDB, React,
              Redux, TeamCity, Octopus Deploy, PM2, Git.
            </span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Feb 2011	- to-date'
          subtitle='Senior FullStack Developer'
          location='Australia, Sydney'
          link='http://www.nine.com.au'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Phoenix - Broadcast management system which is responsible for
              scheduling of all content that airs on TV Australia-wide.
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              As working on the project since 2011, there hardly is a module I
              did not touch. Besides doing whole the full stack job (creating
              stored procedures, adding data access layer entities, mastering
              business logic, configuring WCF and IIS, building UI modules,
              writing unit tests), my responsibility includes various management
              functions like planning sprints, splitting work into Jira tickets,
              reviewing pull requests from other developers, mentoring junior
              developers etc. Detailed project description and screenshots could
              be found{' '}
              <HashLink to='/projects/phoenix#top' activeClassName='active'>
                here
              </HashLink>{' '}
              .
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>.NET 4.7, WPF, MSSQL 2016, WCF, NUnit, TeamCity, Git</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Jun 2016	- May 2019'
          subtitle='Senior FullStack Developer'
          location='Australia, Sydney'
          link='http://www.nine.com.au'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>Saturn - Internal advertisement booking system.</span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Adding new functions involving full stack work. Server side: MSSQL
              Server - creating tables and stored procedures, data access layer
              – building data contracts using entity framework, business logic
              level – adding / updating logic modules inside complex
              hierarchical structure using IoC approach (autofac is used as IoC
              container). Client Side: Creating new / updating existent screens
              in the desktop application using WPF, strongly following the MVVM
              pattern, Telerik was the mostly used UI library. As communication
              layer, WCF has been used, I added / updated contracts, bindings,
              configured connectivity via WCF config files.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>
              .NET Core 2.2, MSSQL 2019, WCF, Git, JavaScript, IdentityServer
            </span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Oct 2018	- May 2019'
          subtitle='Senior FullStack Developer'
          location='Australia, Sydney'
          link='http://9voyager.com.au'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Voyager - Australia’s self-serve TV advertising platform.
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Being focused on performance, creating various functions for the
              web UI using vanilla JS (ES5) targeting for the IE browser. Also
              building more complex modules using 3D-party libraries like
              JQuery,{' '}
              <a
                href='https://d3js.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                D3
              </a>,{' '}
              <a
                href='https://c3js.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                C3
              </a>. Based on that work I created several blog posts for my
              personal{' '}
              <a
                href='https://andreibuntsev.blogspot.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                blog
              </a>{' '}
              that could be used as the source of work examples. Also, my
              responsibility was creating new web services on the server side to
              provide necessary functionality for the web side.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>
              .NET Core 2.2, MSSQL 2019, WCF, Git, JavaScript, IdentityServer
            </span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title='AEXSoft'
          dates='Feb 2010	- Dec 2017'
          subtitle='Full Stack Developer'
          location='Australia, Sydney'
          link='http://aexsoft.com/'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Broadcast management system which is responsible for scheduling of
              all content that airs on TV Australia-wide.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>.NET 4.5, WPF, MSSQL 2016, WCF, NUnit, TeamCity, Git</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Apr 2009	- Jan 2010'
          subtitle='Full Stack Developer'
          location='Russian Federation, Novosibirsk'
          link='http://aexsoft.com/'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Science Data Studio - Desktop Application for plugging in external
              libraries.
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Building user interfaces, creating plugin interfaces, writing unit
              tests.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>.NET 3.5, C#, WPF, DevExpress, Unit Testing.</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Nov 2008	- Apr 2009'
          subtitle='Full Stack Developer'
          location='Russian Federation, Novosibirsk'
          link='http://aexsoft.com/'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Stocker - Accounting, management of the store stock including
              recording deliveries, sells etc.
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Working along with a team leader, reworking .NET 1.1 stocker
              desktop application written in Visual Basic .NET into the modern
              WPF-based application.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>.NET 3.5, C#, WPF, MSSQL Server 2005.</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title='TechnoLogika'
          dates='Nov 2007	- Nov 2008'
          subtitle='Front End Developer'
          location='Russian Federation, Novosibirsk'
          link='https://www.technologika.ru/'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Blue Archer - Building web sites for the customer from Pittsburgh,
              USA ( https://www.bluearcher.com/ ).
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Working along with a designer, have built more than 20 simple
              websites during the entire period. Some of websites were based on
              the existent content management system.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>ASP, JavaScript, VBScript, IIS, HTML, CSS.</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='May 2007	- Nov 2007'
          subtitle='Front End Developer'
          location='Russian Federation, Novosibirsk'
          link='https://www.technologika.ru/'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              ASF - Digital version of Faeroese-English dictionary for a
              customer from Faeroe Islands.
            </span>
            <br />
            <strong>
              <i>My Role: </i>
            </strong>
            <span>
              Working and being totally responsible for CD-edition of the
              dictionary. Whole app included Web-edition, Desktop App and
              CD-edition.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>.NET 3.0, C#, XML, Windows Forms, TFS.</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title='Railroad Computing Centre (IT branch of Russian National Railways)'
          dates='Jul 2006	- May 2007'
          subtitle='Programmer'
          location='Russian Federation, Novosibirsk'
          link='http://eng.rzd.ru/'
        >
          <ul>
            <li>
              Developed, introduced and supported corporate software and
              hardware in accordance with the corporate automation plan;
            </li>
            <li>Developed users’ GUI;</li>
            <li>Integrated hardware and appropriate software;</li>
            <li>Ensured seamless integration of various soft;</li>
          </ul>
        </ExperienceSection>

        <ExperienceSection
          title='Locomotive Depo (Branch of Russian National Railways)'
          dates='Apr 2005	- Jul 2006'
          subtitle='Programmer-engineer/Systems administrator'
          location='Russian Federation, Karasuk'
          link='http://eng.rzd.ru/'
        >
          <ul>
            <li>
              Provided IT admin support to local area network – 60 PCs, three
              servers, 15 hubs, eight ADSL modems;
            </li>
            <li>Managed MSSQL sever 2000;</li>
            <li>
              Provided admin support for corporate software: C#, VBA MS office,
              1C;
            </li>
            <li>Fixed hardware and software glitches;</li>
            <li>Trained and consulted corporate users.</li>
          </ul>
        </ExperienceSection>
      </div>
    )
  }

  componentDidMount () {
    $(document).ready(function () {
      if (!window.$) {
        window.location.href = '/'
      }
      window.$('.experiences-zoom-gallery').magnificPopup({
        delegate: '.gallery-item',
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

export default Experiences

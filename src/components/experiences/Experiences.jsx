import React from 'react'
import * as $ from 'jquery'
import ExperienceSection from './ExperienceSection'

const CERT_WIDTH = 100
const styles = {
  galleryImg: {
    display: 'block',
    marginLeft: '20px'
  }
}

class Experiences extends React.Component {
  render() {
    return (
      <div className='zoom-gallery experiences-zoom-gallery'>
        <h2 className='title'>Experiences</h2>
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
          title='Free Code Camp'
          icon={require('./../../assets/images/freeCodeCampIcon.png')}
          dates='Apr 2019'
          subtitle='Front End Libraries'
          location='Online'
          link='https://www.freecodecamp.org/certification/andreibuntsev/front-end-libraries'
        >
          <a
            className='gallery-item'
            href='/img/certs/fcc-fromtEndLibraries.png'
            data-source='img/certs/fcc-fromtEndLibraries.png'
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
            href='/img/certs/fcc-responsiveWebDesign.png'
            data-source='img/certs/fcc-responsiveWebDesign.png'
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
            href='/img/certs/fcc-algAndDataStruct.png'
            data-source='img/certs/fcc-algAndDataStruct.png'
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
            href='/img/certs/fcc-APIs.png'
            data-source='img/certs/fcc-APIs.png'
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
            href='/img/certs/ms-MCP.png'
            data-source='img/certs/ms-MCP.png'
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
            href='/img/certs/ms-WinApp.png'
            data-source='img/certs/ms-WinApp.png'
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
            href='/img/certs/ms-SQL.png'
            data-source='img/certs/ms-SQL.png'
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
        <h3 className='subtitle'>Careers</h3>

        <ExperienceSection
          title='Nine Entertainment Co'
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
              {' '}Voyager - Australia’s self-serve TV advertising platform.
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
          dates='Apr 2019	- to-date'
          subtitle='Senior FullStack Developer'
          location='Australia, Sydney'
          link='http://www.nine.com.au'
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
            <span>
              .NET 4.7, WPF, MSSQL 2016, WCF, NUnit, TeamCity, Git, NodeJS,
              ReactJS, Redux, JavaScript, TypeScript
            </span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title='Geoffrey Nathan Consulting'
          dates='Jan 2018	- Apr 2019'
          subtitle='Senior FullStack Developer for Nine Network Australia'
          location='Australia, Sydney'
          link='https://www.geoffreynathan.com/'
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
          title='Asia-Australia Technology'
          dates='Feb 2011	- Dec 2017'
          subtitle='Senior FullStack Developer for Nine Network Australia'
          location='Australia, Sydney'
          link='http://www.nine.com.au'
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
            <span>.NET 4.0, WPF, MSSQL 2014, WCF, NUnit, TeamCity.</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Oct 2009	- Apr 2013'
          subtitle='FullStack Developer at Independent Reserve'
          location='Australia, Sydney'
          link='https://www.independentreserve.com'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              The BitCoin market platform providing currency online exchange and
              JSON based API for third-party software developers.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>ASP.NET MVC, RabbitMQ, Erlang, MSSQL 2014</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Sep 2008	- Oct 2009'
          subtitle='Front-end Developer for GPGUIDE PARTNERS LLP'
          location='Australia, Sydney'
          link='https://www.gpguide.com'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Information web resource for all Formula I data and statistics.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>ASP.NET, HTML, JavaScript.</span>
          </div>
        </ExperienceSection>

        <ExperienceSection
          title=''
          dates='Jun 2007	- Mar 2011'
          subtitle='Front-end /Back-end Developer at Plutonium'
          location='Australia, Sydney'
          link='http://plu.asiaaustraliatech.com'
        >
          <div>
            <strong>
              <i>Project description: </i>
            </strong>
            <span>
              Corporate task tracking system: task management, time management,
              sprint planning, email notification system.
            </span>
            <br />
            <strong>
              <i>Technologies applied: </i>
            </strong>
            <span>ASP.NET, HTML, JavaScript, MSSQL</span>
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

  componentDidMount() {
    $(document).ready(function () {
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

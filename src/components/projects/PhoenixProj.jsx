import React from 'react'
import * as $ from 'jquery'

const THUMBNAIL_WIDTH = '250px'

class PhoenixProj extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div
        className='zoom-gallery phoenix-zoom-gallery'
        style={{ paddingBottom: '20px' }}
      >
        <h3>Project Description</h3>
        <p>
          <a
            href='img/projects/Phoenix/PlanningSchedule.png'
            data-source='img/projects/Phoenix/PlanningSchedule.png'
            title='Planning Schedule'
          >
            <img
              src={require('./img/Phoenix/PlanningSchedule.png')}
              width={THUMBNAIL_WIDTH}
              style={{ float: 'right' }}
            />
          </a>
          Being one of the largest media companies, Nine Entertainment Company
          needs a system for scheduling TV content afterwards sending it on-air.
          That’s where Phoenix has been created. So, the main function of the
          app is to provide a handy tool for programs and shows management
          including their content dedicated to specific stations and channels.
          As long as Nine has branches in all Australian big cities (Sydney –
          main office, Melbourne, Brisbane, Gold Coast, Newcastle, Darwin,
          Hobart, Perth, Adelaide, Canberra), the task is not as simple as it
          could seem. Especially, taking into account different time zones,
          synchronizing live shows, daylight savings, etc.
        </p>
        <p>
          <a
            href='img/projects/Phoenix/Catalog.png'
            data-source='img/projects/Phoenix/Catalog.png'
            title='Catalog'
          >
            <img
              src={require('./img/Phoenix/Catalog.png')}
              width={THUMBNAIL_WIDTH}
              style={{ float: 'left' }}
            />
          </a>
          To compose the schedule, the system collects information about all the
          shows. There is a function to create/edit shows as well as to choose
          between various episodes and episode versions. All the changes made on
          the screen are auditable so could be viewed on the audit screens.
        </p>
        <p>
          <a
            href='img/projects/Phoenix/PresentationStack.png'
            data-source='img/projects/Phoenix/PresentationStack.png'
            title='Catalog'
          >
            <img
              src={require('./img/Phoenix/PresentationStack.png')}
              width={THUMBNAIL_WIDTH}
              style={{ float: 'right' }}
            />
          </a>
          Just created schedule goes to the presentation department where it is
          filled with various types of break items like promotions, commercials,
          crawls, logos, etc. Information about prepaid commercials is imported
          from another internal advertisement booking system. The presentation
          operators can adjust all the items manually if necessary. The
          presentation stack management screen contains a lot of management
          functions like copy items between stations/channels, export data to
          various external systems using different formats and protocols. The
          final goal of the presentation stack is to be serialized and sent to
          on-air systems in XML format.
        </p>
        <p>
          <a
            href='img/projects/Phoenix/MaterialManagement.png'
            data-source='img/projects/Phoenix/MaterialManagement.png'
            title='Catalog'
          >
            <img
              src={require('./img/Phoenix/MaterialManagement.png')}
              width={THUMBNAIL_WIDTH}
              style={{ float: 'left' }}
            />
          </a>
          <div style={{ marginTop: '60px' }}>
            Every break item also could be edited via the Material Management
            screen.
          </div>
        </p>
        <p>
          <a
            href='img/projects/Phoenix/LogAmendReport.png'
            data-source='img/projects/Phoenix/LogAmendReport.png'
            title='Catalog'
          >
            <img
              src={require('./img/Phoenix/LogAmendReport.png')}
              width={THUMBNAIL_WIDTH}
              style={{ float: 'right' }}
            />
          </a>
          There are many systems and departments that consume data from Phoenix.
          Thus, the ways the app can export its data include sending files to
          FTP servers, sending to shared network folders, expose webservice
          APIs, generate reports. There are about 40 types of report Phoenix can
          generate. The reports are implemented using RDLC reporting system and
          can be formatted as Excel, Word, PDF files.
        </p>
        <h3>Technical details</h3>
        <p>
          Phoenix is a windows desktop application that originally was developed
          using WPF 3.5 then gradually was migrated to the .NET platform
          versions 4.0, 4.5, 4.7.2. The application is used for Nine
          Entertainment Company’s internal purposes, average number of users
          about 500 throughout Australia.
        </p>
        <p>
          Phoenix is client-server application with clean 3-tier architecture.
          UI is implemented as WPF Windows Smart Client. Smart client (or thin
          client in other words) is communicating with Application Server (IIS7)
          where WCF services are hosted. WCF Services are API for all
          application business logic. Business Logic communicating with
          Microsoft SQL Server via DataAccess layer (C# class library and SQL
          Stored Procedures). Application used strong OOP patterns and business
          object model.
        </p>
        <p>
          Technologies stack: .NET, C#, WPF, MVVM, WCF, 3-tier architecture,
          Microsoft SQL Server. All application business logic is unit tested
          with automatic tests (NUnit). That greatly increasing maintainability
          of source codes. Continuous Integration is implemented via TeamCity
          that provides one-click deployment into several environments (DEV,
          QAT, UAT, STAGING, PRODUCTION).
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

  componentDidMount () {
    $(document).ready(function () {
      window.$('.phoenix-zoom-gallery').magnificPopup({
        delegate: 'a',
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

export default PhoenixProj

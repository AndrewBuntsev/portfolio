import React from 'react'
import * as $ from 'jquery'

class ATSProj extends React.Component {
  render () {
    return (
      <div>
        <div className='zoom-gallery ats-zoom-gallery'>
          <h3>Project Details</h3>
          <p>
            Automatic Test System is aimed to streamline testing process for
            mobile operators. The system architecture is the following.
            <a
              href='/img/projects/ATS/Architecture.png'
              data-source='img/projects/ATS/Architecture.png'
              title='ATS Architecture'
            >
              <img
                src={require('./img/ATS/Architecture.png')}
                width='250'
                style={{ display: 'block', margin: '10px auto 0' }}
              />
            </a>
          </p>
        </div>
        <p>
          The application allows to create scenarios that will be aumatically
          processed. Every scenario means setup the mobile devices into a
          specifig mode (2G, 3G, 4G, LTE, Fly Mode), than making calls from/to
          the devices. The scenario processed automatilly without human
          interactions. All the commands are send using{' '}
          <span>
            <a
              href='https://developer.android.com/studio/command-line/adb'
              target='_blank'
            >
              {' '}Android Debug Bridge
            </a>{' '}
          </span>
          utility. Mobile devices connected to PC via USB ports. As a portable
          data base is used SQLite.
        </p>
        <p>
          To see the app in action watch the demo video.
          <iframe
            src='https://www.youtube.com/embed/RQq3SFGPxgI'
            frameBorder='0'
            style={{
              display: 'block',
              margin: '10px auto 0',
              width: '500px',
              height: '300px'
            }}
            allowFullScreen
          />
        </p>
        <h3 style={{ textAlign: 'center' }}>Technical details</h3>
        <p>Technologies stack: .NET 4.6, C#, WPF, MVVM, SQLite, ADB.</p>
        <p>
          <a href='https://bitbucket.org/andreibuntsev/ast' target='_blank'>
            https://bitbucket.org/andreibuntsev/ast
          </a>
        </p>
        <h3 style={{ textAlign: 'center' }}>My Role in the project</h3>
        <p style={{ paddingBottom: '20px' }}>
          I have been the only developer on the project along with Maksim
          Kravchenko as the system analyst.
        </p>
      </div>
    )
  }

  componentDidMount () {
    $(document).ready(function () {
      window.$('.ats-zoom-gallery').magnificPopup({
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

export default ATSProj

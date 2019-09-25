import React from 'react'
import * as $ from 'jquery'

class PhoenixProj extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(process.env.PUBLIC_URL)
    return (
      <div className='zoom-gallery'>
        <a
          href='img/projects/Phoenix/PlanningSchedule.png'
          data-source='img/projects/Phoenix/PlanningSchedule.png'
          title='Planning Schedule'
          style={{ width: '82px', height: '125px' }}
        >
          <img
            src={require('./img/Phoenix/PlanningSchedule.png')}
            width='82px'
            height='125'
          />
        </a>
        test text
        <p>another test</p>
        <p>another test</p>
        <p>another test</p>
        <a
          href='img/projects/Phoenix/Catalog.png'
          data-source='img/projects/Phoenix/Catalog.png'
          title='Catalog'
          style={{ width: '82px', height: '125px' }}
        >
          <img
            src={require('./img/Phoenix/Catalog.png')}
            width='82px'
            height='125'
          />
        </a>
      </div>
    )
  }

  componentDidMount () {
    $(document).ready(function () {
      window.$('.zoom-gallery').magnificPopup({
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

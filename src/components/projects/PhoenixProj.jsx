import React from 'react'
import * as $ from 'jquery'

class PhoenixProj extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='zoom-gallery'>
        <a
          href='http://farm4.staticflickr.com/3763/9204547649_0472680945_o.jpg'
          data-source='http://500px.com/photo/32736307'
          title='Into The Blue'
          style={{ width: '193px', height: '125px' }}
        >
          <img
            src='http://farm4.staticflickr.com/3763/9204547649_7de96ee188_t.jpg'
            width='193'
            height='125'
          />
        </a>
        <a
          href='http://farm3.staticflickr.com/2856/9207329420_7f2a668b06_o.jpg'
          data-source='http://500px.com/photo/32554131'
          title='Light Sabre'
          style={{ width: '82px', height: '125px' }}
        >
          <img
            src='http://farm3.staticflickr.com/2856/9207329420_e485948b01_t.jpg'
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

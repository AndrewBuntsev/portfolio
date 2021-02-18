import React from 'react'
// import { NavLink } from 'react-router-dom'
import { PAGES } from './common/pages'
import SocialMediaPanel from './SocialMediaPanel'
import { HashLink } from 'react-router-hash-link'

class Sidebar extends React.Component {
  render() {
    const menuItems = PAGES.map((page, i) =>
      <li key={i}>
        {page.route &&
          <HashLink to={page.route + '#top'}>
            {page.title}
          </HashLink>}
        {page.externalLink &&
          <a href={page.externalLink} target='_blank' rel='noopener noreferrer'>
            {page.title}
          </a>}
      </li>
    )
    return (
      <div className='sidebar'>
        <div
          style={{ margin: '0 0 0 30px', fontSize: '22px', fontWeight: 'bold' }}
        >
          Andrei Buntsev
        </div>
        <img
          src={require('../assets/images/ava.jpg')}
          alt='avatar'
          width='100'
          style={{ borderRadius: '50%', margin: '20px 0px 20px 30px' }}
        />
        <div
          style={{
            position: 'absolute',
            paddingRight: '15px',
            fontFamily: 'Roboto',
            fontSize: '14px'
          }}
        >
          Hi, my name is Andrei Buntsev and I'm a senior software developer.
          Welcome to my personal website!
        </div>

        <div style={{ position: 'absolute', top: '285px', left: '35px' }}>
          <SocialMediaPanel />
        </div>

        <ul>
          {menuItems}
        </ul>

        <div style={{ position: 'absolute', bottom: '60px', color: '#808080', left: '80px', }}>
          <div>Copyright @ 2021</div>
          <div style={{ margin: '3px 0 0 3px' }}>
            <div style={{ float: 'left' }}> Made with React</div>
            <div style={{ float: 'right' }}>
              <img src={require('./skills/img/react.png')} alt='' width='20' />
            </div>
            <div>
              <a
                href='https://github.com/AndrewBuntsev/portfolio'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginLeft: '10px', color: '#808080', textDecoration: 'underline' }}>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar

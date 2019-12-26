import React from 'react'
import { NavLink } from 'react-router-dom'
import { PAGES } from './common/pages'
import SocialMediaPanel from './SocialMediaPanel'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const menuItems = PAGES.map((page, i) =>
      <li key={i}>
        {page.route &&
          <NavLink exact to={page.route} activeClassName='active'>
            {page.title}
          </NavLink>}
        {page.externalLink &&
          <a href={page.externalLink} target='_blank'>
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

        <div style={{ position: 'absolute', top: '285px', left: '45px' }}>
          <SocialMediaPanel />
        </div>

        <ul>
          {menuItems}
        </ul>
      </div>
    )
  }
}

export default Sidebar

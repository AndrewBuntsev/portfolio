import React from 'react'
import { NavLink } from 'react-router-dom'
import { PAGES } from './common/pages'

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
        <ul>
          {menuItems}
        </ul>
      </div>
    )
  }
}

export default Sidebar

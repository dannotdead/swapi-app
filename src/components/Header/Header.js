import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
        <div className='header align-items-center'>
          <h3>
            <a href='#' className='text-decoration-none'>SWAPI APP</a>
          </h3>

          <ul className='col-md-10'>
            <li>
              <a href='#' className='text-decoration-none'>People</a>
            </li>
            <li>
              <a href='#' className='text-decoration-none'>Planets</a>
            </li>
            <li>
              <a href='#' className='text-decoration-none'>Starships</a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Header;
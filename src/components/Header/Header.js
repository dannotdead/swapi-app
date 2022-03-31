import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className='header align-items-center'>
        <h3>
          <Link
            to='/'
            className='text-decoration-none'
          >
            SWAPI APP
          </Link>
        </h3>

        <ul className='col-md-10'>
          <li>
            <Link
              to='/peoples'
              className='text-decoration-none'
            >
              Peoples
            </Link>
          </li>
          <li>
            <Link
              to='/planets'
              className='text-decoration-none'
            >
              Planets
            </Link>
          </li>
          <li>
            <Link
              to='/starships'
              className='text-decoration-none'
            >
              Starships
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
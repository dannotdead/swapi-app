import React, {Component} from 'react'

import './ErrorIndicator.css'
import DeathStar from '../../static/death-star.svg'

class ErrorIndicator extends Component {
  render() {
    return (
        <div className='error-indicator'>
          <img className='error-image' src={DeathStar} alt='error icon' />
          <span className='boom'>BOOM!</span>
          <span>
            Something has gone terribly wrong
          </span>
          <span>
            (but we already sent droids to fix it)
          </span>
        </div>
    );
  }
}

export default ErrorIndicator;
import React from 'react';

import './Row.css'
import PropTypes from 'prop-types';

const Row = ({ list, details }) => {
  return (
      <div className='d-flex justify-content-between mt-3'>
        <div className='col-md-3'>
          { list }
        </div>
        <div className='col-md-8'>
          { details }
        </div>
      </div>
  );
};

Row.propTypes = {
  list: PropTypes.node,
  details: PropTypes.node
}

export default Row;
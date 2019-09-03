/**
 *
 * Loader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import loader from '../../images/loading.gif';
import './styles.css'
function Loader(props) {
  return (props.loading ? (
    <div className='loader-container'>
      <img src={loader} alt="..."/>
    </div>
  ) : '')
}

Loader.propTypes = {};

export default Loader;

/**
 *
 * FavouriteBeers
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectFavBeers } from '../Beers/selectors';
import DataTable from '../../components/DataTable';
import './styles.css';

export function FavouriteBeers(props) {
  useInjectReducer({ key: 'favouriteBeers', reducer });
  return (
    <div>
      <DataTable data={props.favouriteBeers} fav={true} sortHandler={() => { }} makeFavourite={() => { }} sortAsc={() => { }}></DataTable>
    </div>
  );
}

FavouriteBeers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  favouriteBeers: makeSelectFavBeers(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FavouriteBeers);

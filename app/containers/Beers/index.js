/**
 *
 * Beers
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBeers from './selectors';
import { makeSelectFavBeers } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { fetchBeers, updateBeer } from './actions';
import DataTable from '../../components/DataTable';

import Loader from '../../components/Loader';

import './styles.css';
import { Link } from 'react-router-dom';

export function Beers(props) {
  useInjectReducer({ key: 'beers', reducer });
  useInjectSaga({ key: 'beers', saga });
  const { meta } = props.data
  let [beers, setBeers] = useState([]);
  let [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    props.fetchBeers(1);
  }, []);

  useEffect(() => {
    console.log('use Effect sortAsc')
    sortAndUpdateBeers(beers)
  }, [sortAsc]);

  useEffect(() => {
    console.log('use Effect beers')
    sortAndUpdateBeers(props.data.beers)
  }, [props.data.beers]);

  const sortAndUpdateBeers = (data) => {
    let sortedBeers = data.sort((first, second) => sortByName(first, second));
    setBeers([...sortedBeers])
  }


  const showMore = () => {
    props.fetchBeers(meta.currentPage + 1);
  }

  const sortByName = (a, b) => {
    let first = a.nameDisplay;
    let second = b.nameDisplay;
    if (sortAsc) {
      if (first < second) {
        return -1;
      }
      if (first > second) {
        return 1;
      }
      return 0;
    }
    else {
      if (first > second) {
        return -1;
      }
      if (first < second) {
        return 1;
      }
      return 0;
    }
  };

  const makeFavourite = (beer) => {
    props.updateBeer(beer)
  }

  return (
    <div>
      <Helmet>
        <title>Beers</title>
        <meta name="description" content="Description of Beers" />
      </Helmet>
      <Loader loading={props.data.loading} />

      <Link className="fav-btn" to='/beers/fav' >Favourite Beers</Link>
      <DataTable data={beers} sortHandler={() => setSortAsc(!sortAsc)} makeFavourite={makeFavourite} sortAsc={sortAsc}></DataTable>

      <div className="load-more-btn-wrapper">
        {meta.isRemaining && <button className="load-more-btn" onClick={showMore}> Show More </button>}
      </div>
    </div>
  );
}

Beers.propTypes = {
  data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectBeers(),
  favBeers: makeSelectFavBeers(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchBeers: (pageNo) => dispatch(fetchBeers(pageNo)),
    updateBeer: (beer) => dispatch(updateBeer(beer)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Beers);

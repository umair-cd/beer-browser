import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the beers state domain
 */

const selectBeersDomain = state => state.beers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Beers
 */

const makeSelectBeers = () =>
  createSelector(
    selectBeersDomain,
    substate => substate,
  );

const makeSelectFavBeers = () =>
  createSelector(
    selectBeersDomain,
    substate => substate.favBeers,
  );


export default makeSelectBeers;
export { selectBeersDomain, makeSelectFavBeers };

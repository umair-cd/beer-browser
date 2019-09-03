import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the favouriteBeers state domain
 */

const selectFavouriteBeersDomain = state =>
  state.favouriteBeers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FavouriteBeers
 */

const makeSelectFavouriteBeers = () =>
  createSelector(
    selectFavouriteBeersDomain,
    substate => substate,
  );

export default makeSelectFavouriteBeers;
export { selectFavouriteBeersDomain };

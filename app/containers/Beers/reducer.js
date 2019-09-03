/*
 *
 * Beers reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILED, LOADER_START, LOADER_STOP,
  UPDATE_BEER_SUCCESS, ADD_FAVOURITE_BEER, REMOVE_FAVOURITE_BEER
} from './constants';

export const initialState = {
  beers: [],
  favBeers: [],
  meta: {
    currentPage: 1,
    numberOfPages: 0,
    totalResults: 0,
    isRemaining: false
  },
  loading: false
};

/* eslint-disable default-case, no-param-reassign */
const beersReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case FETCH_BEERS_SUCCESS:
        let beers = action.payload.data.map(beer => ({
          ...beer,
          favourite: false
        }))

        draft.beers = action.payload.currentPage == 1 ? [...beers] : [...draft.beers.concat(beers)]
        draft.meta = {
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
          totalResults: action.payload.totalResults,
          isRemaining: action.payload.currentPage < action.payload.numberOfPages ? true : false
        }
        draft.loading = false
        break;

      case LOADER_START:
        draft.loading = true
        break;

      case LOADER_STOP:
        draft.loading = false
        break;

      case FETCH_BEERS_FAILED:
        draft.loading = false
        break;

      case UPDATE_BEER_SUCCESS:
        draft.beers = [...action.payload]
        break;
      case ADD_FAVOURITE_BEER:
        draft.favBeers.push(action.payload)
        break;
      case REMOVE_FAVOURITE_BEER:
        draft.favBeers = [...action.payload]
        break;
    }
  });

export default beersReducer;

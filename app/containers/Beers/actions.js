/*
 *
 * Beers actions
 *
 */

import {
  DEFAULT_ACTION, FETCH_BEERS, FETCH_BEERS_SUCCESS, FETCH_BEERS_FAILED, LOADER_START, LOADER_STOP,
  UPDATE_BEER, UPDATE_BEER_SUCCESS, ADD_FAVOURITE_BEER, REMOVE_FAVOURITE_BEER
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loaderStart() {
  return {
    type: LOADER_START,
  };
}

export function loaderStop() {
  return {
    type: LOADER_STOP,
  };
}

export function fetchBeers(pageNo) {
  return {
    type: FETCH_BEERS,
    payload: pageNo
  };
}

export function fetchBeersSuccess(data) {
  return {
    type: FETCH_BEERS_SUCCESS,
    payload: data
  };
}

export function fetchBeersFailed(data) {
  return {
    type: FETCH_BEERS_FAILED,
    payload: data
  };
}

export function updateBeer(data) {
  return {
    type: UPDATE_BEER,
    data
  };
}

export function updateBeerSuccess(data) {
  return {
    type: UPDATE_BEER_SUCCESS,
    payload: data
  };
}

export function addFavourite(data) {
  return {
    type: ADD_FAVOURITE_BEER,
    payload: data
  };
}

export function removeFavourite(data) {
  return {
    type: REMOVE_FAVOURITE_BEER,
    payload: data
  };
}


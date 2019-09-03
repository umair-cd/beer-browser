import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_BEERS, UPDATE_BEER } from './constants';
import makeSelectBeers from './selectors';

import { getUtil, postUtil, putUtil, patchUtil, deleteUtil } from '../../utils/axios';
import { API_BASE_URL, API_KEY } from '../../utils/apiConstants';
import { fetchBeersSuccess, fetchBeersFailed, loaderStart, loaderStop, updateBeerSuccess, addFavourite, removeFavourite } from './actions'

export function* getBeers(action) {
  try {
    yield put(loaderStart())
    const pageNo = parseInt(action.payload)
    const url = `${API_BASE_URL}/beers?key=${API_KEY}&p=${pageNo}`;
    const response = yield call(getUtil, url);
    response.status == 200 ? yield put(fetchBeersSuccess(response.data)) : yield put(fetchBeersFailed(response))
  } catch (err) {
    yield put(loaderStop())
  }

}

export function* updateBeer(action) {
  const prevState = yield select(makeSelectBeers())
  let updateBeers = prevState.beers
  let favIndex = 0
  prevState.beers.map((beer, index) => {
    if (beer.id === action.data.id) {
      favIndex = index
      const updatedObject = Object.assign({}, beer, { favourite: !beer.favourite });
      updateBeers[index] = updatedObject;
    }
  })
  yield put(updateBeerSuccess(updateBeers))
  if (updateBeers[favIndex].favourite) {
    yield put(addFavourite(updateBeers[favIndex]))
  } else {
    const updateFavBeers = prevState.favBeers.filter(item => item.id !== updateBeers[favIndex].id);
    yield put(removeFavourite(updateFavBeers))
  }
}

// Individual exports for testing
export default function* beersSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_BEERS, getBeers);
  yield takeLatest(UPDATE_BEER, updateBeer);
}

/**
 *
 * Asynchronously loads the component for Beers
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

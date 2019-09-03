/*
 * Beers Messages
 *
 * This contains all the text for the Beers container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Beers';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Beers container!',
  },
});

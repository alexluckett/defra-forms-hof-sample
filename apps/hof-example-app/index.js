'use strict';

const hof = require('hof');
const Summary = hof.components.summary;

module.exports = {
  name: 'hof-example-app',
  baseUrl: '/hof-example-app',
  steps: {
    '/personal-details': {
      fields: ['name', 'age'],
      next: '/business-details'
    },
    '/business-details': {
      behaviours: [require('./behaviours/defra-business-number')],
      fields: ['are-you-a-business', 'defra-number'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [Summary, require('./behaviours/logger')('Confirm')],
      next: '/confirmation'
    },
    '/confirmation': {
      behaviours: [require('./behaviours/logger')('Confirmation')],
      backLink: false,
      clearSession: true,
      locals: {
        section: 'confirmation'
      }
    }
  }
};

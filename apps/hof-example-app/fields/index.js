'use strict';

module.exports = {
  "name": {
    validate: 'required'
  },
  "age": {
    validate: 'required'
  },
  "are-you-a-business": {
    validate: 'required',
    mixin: 'radio-group',
    options: [
      'yes',
      'no'
    ]
  },
  "defra-number": {
  },
};

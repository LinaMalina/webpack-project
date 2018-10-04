'use strict';

module.exports = {
  plugins: {
    precss: {},
    autoprefixer: {
      browsers: ['last 4 version'],
    },
    'css-mqpacker': {},
    cssnano: {
      discardUnused: false,
      zindex: false,
      autoprefixer: false,
    },
  },
};

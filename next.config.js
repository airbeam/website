require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    webpack : (config) => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path       : path.join(__dirname, '.env'),
          systemvars : true
        })
      ];

      return config;
    }
  })
);

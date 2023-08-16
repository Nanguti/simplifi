// next.config.js
module.exports = {
    images: {
      domains: ['adminpanel.nanguti.co.ke'],
    },
    webpack: (config, { dev }) => {
      if (dev) {
        config.devtool = 'cheap-module-source-map';
      }
      return config;
    },
  };
  
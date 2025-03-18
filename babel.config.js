module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@backend': './backend', // ✅ Esto apunta a `backend/`
            },
          },
        ],
      ],
    };
  };
  
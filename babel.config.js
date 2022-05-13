module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@native-base/icons': '@native-base/icons/lib',
            components: ['./src/components'],
            screens: ['./src/screens'],
            assets: ['./assets'],
            navigation: ['./src/navigation'],
            utils: ['./src//utils'],
          },
        },
      ],
    ],
  };
};

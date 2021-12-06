module.exports = (api) =>  {
  api.cache(false)

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-class-properties',
      'react-native-reanimated/plugin'
    ],
  }
}


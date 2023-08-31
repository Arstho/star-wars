const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
   alias({
      '@components': 'src/components',
      '@constants': 'src/constants',
      '@containers': 'src/containers',
      '@hoc-helper': 'src/hoc-helper',
      '@services': 'src/services',
      '@styles': 'src/styles',
      '@utils': 'src/utils',
      '@routes': 'src/routes',
   })(config)
   return config;
}
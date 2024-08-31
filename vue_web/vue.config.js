const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  
})

module.exports = {
  devServer: {
    client: {
      overlay: false,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      }
    }
  }
}

const mix = require("laravel-mix")

mix.setPublicPath("dist")
mix.js("src/js/app.js", "dist/js").vue()

mix.webpackConfig({
  resolve: { symlinks: false },
  watchOptions: { ignored: /node_modules/ },

  // This works:
  // output: { publicPath: '/'},

  // This does not:
  // output: { chunkFilename: '[name].js?[hash]' },
})

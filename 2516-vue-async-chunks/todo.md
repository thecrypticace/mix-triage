# TODOs
1. Fix usage of `webpackChunkName: '/js/button'` or allow `webpackChunkName: 'js/button'` to work

Problem: /js/button gets resolved as an absolute url at runtime w/ no domain.

2. Investigate why `chunkFilename: '[name].js?[hash]'` causes a chunk loading failure

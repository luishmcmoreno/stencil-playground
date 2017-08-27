exports.config = {
  bundles: [
    { components: ['todo-list'] },
    { components: ['todo-task'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

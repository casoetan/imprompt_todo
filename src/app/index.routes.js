function routeConfig ($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject'

  $stateProvider
    .state('async', {
      url: '/async',
      templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/darkside/async.html'),
      controller: 'asyncController',
      resolve: {
        asyncPreloading: resolverProvider.asyncPagePrealoading
      }
    })

  $urlRouterProvider.otherwise('/')
}

export default angular
  .module('index.routes', [])
  .config(routeConfig)

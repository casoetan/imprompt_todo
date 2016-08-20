import config from './index.config'
import run from './index.run'

import coreModule from './core/core.module'
import componentsModule from './index.components'
import routesModule from './index.routes'
import mainPageModule from './pages/main/main.module'

const App = angular.module(
  'AdjustTodo', [
    // plugins
    require('angular-ui-router'),
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'oc.lazyLoad',
    coreModule.name,
    componentsModule.name,
    routesModule.name,
    mainPageModule.name,
  ]
)

App
  .config(config)
  .run(run)

export default App

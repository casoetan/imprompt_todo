import config from './index.config'
import run from './index.run'

import componentsModule from './index.components'
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
    'ngRedux',
    componentsModule.name,
    mainPageModule.name,
  ]
)

App
  .config(config)
  .run(run)

export default App

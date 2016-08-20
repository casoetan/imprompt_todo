import headerTpl from './index.html'

function headerComponent ($log) {
  'ngInject'

  return {
    restrict: 'E',
    templateUrl: headerTpl,
    controller: HeaderController,
    controllerAs: 'todoHeader',
    bindToController: true
  }

  function HeaderController () {
    $log.debug('Hello from the header controller!')
  }
}

export default headerComponent

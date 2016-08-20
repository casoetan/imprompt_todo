import filtersTpl from './index.html'

function filtersComponent ($log) {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: filtersTpl,
    controller: FiltersController,
    controllerAs: 'vm',
    bindToController: true
  }

  return directive

  function FiltersController () {
    $log.debug('Hello from filters controller!')
  }
}

export default filtersComponent

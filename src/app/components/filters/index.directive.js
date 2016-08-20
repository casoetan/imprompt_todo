import filtersTpl from './index.html'

function filtersComponent ($log) {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: filtersTpl,
    controller: FiltersController,
    controllerAs: 'todoFilters',
    bindToController: true
  }

  return directive

  function FiltersController () {
    let todoFilters = this
    todoFilters.filter = 'all'
    todoFilters.availableFilters = ['all', 'open', 'closed']
  }
}

export default filtersComponent

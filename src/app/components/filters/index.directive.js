import filtersTpl from './index.html'

import { filterTodo } from '../../redux/actions'

function filtersComponent () {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: filtersTpl,
    controller: FiltersController,
    controllerAs: 'todoFilters',
    bindToController: true
  }

  return directive

  function FiltersController ($scope, $ngRedux) {
    let unsubscribe = $ngRedux.connect(undefined, { filterTodo })(this);
    $scope.$on('$destroy', unsubscribe);

    let todoFilters = this
    todoFilters.filter = 'all'
    todoFilters.availableFilters = ['all', 'open', 'closed']

    this.applyFilters = filter => this.filterTodo(filter)
  }
}

export default filtersComponent

import indexTpl from './index.html'

function todoListComponent ($log) {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: indexTpl,
    controller: TodoListController,
    controllerAs: 'vm',
    bindToController: true
  }

  return directive

  function TodoListController () {
    $log.debug('Hello from todoList controller!')
  }
}

export default todoListComponent

import indexTpl from './index.html'

function todoInputComponent ($log) {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: indexTpl,
    controller: TodoInputController,
    controllerAs: 'vm',
    bindToController: true
  }

  return directive

  function TodoInputController () {
    $log.debug('Hello from todoInput controller!')
  }
}

export default todoInputComponent

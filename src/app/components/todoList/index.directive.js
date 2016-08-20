import indexTpl from './index.html'

function todoListComponent ($log) {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: indexTpl,
    controller: TodoListController,
    controllerAs: 'todos',
    bindToController: true
  }

  return directive

  function TodoListController () {
    let todos = this

    todos.list = [
      { id: 1, text: 'A first', done: true },
      { id: 2, text: 'A second', done: true },
      { id: 3, text: 'A third', done: false },
      { id: 4, text: 'A fourth', done: true },
      { id: 5, text: 'A fifth', done: false }
    ]
  }
}

export default todoListComponent

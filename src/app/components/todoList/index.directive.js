import indexTpl from './index.html'

import { toggleTodoState } from '../../redux/actions'

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

  function TodoListController ($scope, $ngRedux) {
    let unsubscribe = $ngRedux.connect(mapStateToThis, { toggleTodoState})(this)
    $scope.$on('$destroy', unsubscribe)

    function mapStateToThis (state) {
      const activeTodos = state.todos.filter(todo => {
        switch (state.filter) {
          case 'open':
            return !todo.done ? todo : false
          case 'closed':
            return todo.done ? todo : false
          default:
            return todo
        }
      })

      return { list: activeTodos }
    }

    this.toggleTodo = todo => this.toggleTodoState(todo.id)
  }
}

export default todoListComponent

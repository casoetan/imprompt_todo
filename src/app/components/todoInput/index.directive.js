import indexTpl from './index.html'

import { addTodo } from '../../redux/actions'

function todoInputComponent () {
  'ngInject'

  var directive = {
    restrict: 'E',
    templateUrl: indexTpl,
    controller: TodoInputController,
    controllerAs: 'todoInput',
    bindToController: true
  }

  return directive

  function TodoInputController ($scope, $ngRedux) {
    let unsubscribe = $ngRedux.connect(undefined, { addTodo })(this);
    $scope.$on('$destroy', unsubscribe);

    this.onKeydown = event => event.code === 'Enter' ? this.newTodo() : undefined

    this.newTodo = () => {
      const todoText = this.text
      this.text = ''
      return this.addTodo({
        id: Date.now(),
        text: todoText,
        done: false
      })
    }
  }
}

export default todoInputComponent

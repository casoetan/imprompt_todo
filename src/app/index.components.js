import todoInputModule from './components/todoInput/index.module'
import todoListModule from './components/todoList/index.module'
import filtersModule from './components/filters/index.module'
import footerModule from './components/footer/index.module'

export default angular.module('index.components', [
  todoInputModule.name,
  todoListModule.name,
  filtersModule.name,
  footerModule.name
])

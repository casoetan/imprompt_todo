import todoListDirective from './index.directive'
import './index.scss'

const todoListModule = angular.module('todo-list-module', [])

todoListModule
  .directive('todoList', todoListDirective)

export default todoListModule

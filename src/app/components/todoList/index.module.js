import todoListDirective from './index.directive'
import './index.scss'

const todoListModule = angular.module('todolist-module', [])

todoListModule
  .directive('todoList', todoListDirective)

export default todoListModule

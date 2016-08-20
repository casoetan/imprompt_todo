import todoInputDirective from './index.directive'
import './index.scss'

const todoInputModule = angular.module('todo-input-module', [])

todoInputModule
  .directive('todoInput', todoInputDirective)

export default todoInputModule

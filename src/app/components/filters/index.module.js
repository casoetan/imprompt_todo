import filtersDirective from './index.directive'
import './index.scss'

const filtersModule = angular.module('filters-module', [])

filtersModule
  .directive('filtersTest', filtersDirective)

export default filtersModule

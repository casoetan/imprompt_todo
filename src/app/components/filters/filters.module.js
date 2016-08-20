import filtersDirective from './filters.directive'
import './filters.scss'

const filtersModule = angular.module('filters-module', [])

filtersModule
  .directive('filtersTest', filtersDirective)

export default filtersModule

import headerComponent from './index.component'
import './index.scss'

const headerModule = angular.module('header-module', [])

headerModule
  .directive('todoHeader', headerComponent)

export default headerModule

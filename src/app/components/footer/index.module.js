import footerComponent from './index.component'
import './index.scss'

const footerModule = angular.module('footer-module', [])

footerModule
  .directive('footerTest', footerComponent)

export default footerModule

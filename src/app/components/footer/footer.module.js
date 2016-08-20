import footerComponent from './footer.component'
import './footer.scss'

const footerModule = angular.module('footer-module', [])

footerModule
  .directive('footerTest', footerComponent)

export default footerModule

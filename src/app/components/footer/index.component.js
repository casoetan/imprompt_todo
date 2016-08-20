import footerTpl from './index.html'

function footerComponent ($log) {
  'ngInject'

  return {
    restrict: 'E',
    templateUrl: footerTpl,
    controller: FooterController,
    controllerAs: 'todoFooter',
    bindToController: true
  }

  function FooterController () {
    $log.debug('Hello from footer controller!')
  }
}

export default footerComponent

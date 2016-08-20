import footerTpl from './footer.html'

function footerComponent ($log) {
  'ngInject'

  return {
    restrict: 'E',
    templateUrl: footerTpl,
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  }

  function FooterController () {
    $log.debug('Hello from footer controller!')
  }
}

export default footerComponent

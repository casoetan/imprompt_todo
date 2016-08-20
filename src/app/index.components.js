import filtersModule from './components/filters/filters.module'
import footerModule from './components/footer/footer.module'

export default angular.module('index.components', [
  filtersModule.name,
  footerModule.name
])

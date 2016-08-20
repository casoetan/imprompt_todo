import reducers from './redux/reducers'

function config($logProvider, $ngReduxProvider) {
	'ngInject'

  $logProvider.debugEnabled(true)
  $ngReduxProvider.createStoreWith(reducers)
}

export default config;

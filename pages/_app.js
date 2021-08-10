import '../styles/globals.css'

// GoogleAnalytics
import Router from 'next/router'

import store from '/store/store'
import { Provider } from 'react-redux'

// GoogleAnalytics
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {

  // GoogleAnalytics
  Router.events.on('routeChangeComplete', url => gtag.pageView(url))
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

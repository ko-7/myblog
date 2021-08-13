import '../styles/globals.css'

import {React, useEffect} from 'react';
import { useRouter } from 'next/router';
// GoogleAnalytics
// import Router from 'next/router'
// GoogleAnalytics
// import * as gtag from '../lib/gtag'

import store from '/store/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  // ↓↓　GoogleAnalytics　↓↓--------------------------------
  // const router = useRouter();
  // useEffect (() => {
  //   if (!gtag.existsGaId) return;
  //   const handleRouteChange = (path) => {
  //     gtag.pageview(path)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])
  // ↑↑　GoogleAnalytics　↑↑--------------------------------

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

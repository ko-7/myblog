import React from 'react';
import Head from 'next/head';

import styles from '../styles/Layout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

// GoogleAnalytics用のコード
import { existsGaId, GA_ID } from '../lib/gtag';

export default function Layout(props) {
  return (<div>
    <Head>
      <title>{props.title}</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script async srs={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });`,
        }}
      />
    </Head>

    <Header header={props.header} title={props.title} />
    <React.Fragment>
      <div>
        {props.children}
      </div>
    </React.Fragment>
    <Footer footer="🄫 2021 tekuteku All Rights Reserved." />
  </div>)
}
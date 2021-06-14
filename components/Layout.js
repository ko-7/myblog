import React from 'react';
import Head from 'next/head';

import styles from '../styles/Layout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout(props) {

  return (<div>
    <Head>
      <title>{props.title}</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      {/* レスポンシブのテキスト */}
      <script src="flex-font-layout_2.0.0.js"></script> 
      <script src="flex-font-layout_editor_2.0.1.js"></script>
    </Head>

    <Header header={props.header} title={props.title} />
    <React.Fragment>
      <div>
        {props.children}
      </div>
    </React.Fragment>
    <Footer footer="🄫 2021 Shimura" />
  </div>)
}
// 記事のテンプレート
// 書いたらpagesの各フォルダに格納する！

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function TemplateArticle(){
  return (<Layout>
    <div className={styles.container}>

      {/* /////////////////////メインコンテンツ//////////////////////////////// */}
      <div className={styles.mainContents}>
        {/* ---------------------------------メタ情報！！-------------------------- */}
        <div className={styles.updated}>更新日時：yyyy年m月d日</div>
        <h1>記事タイトル</h1>
        <img className={styles.topPhoto} src='#' />
        <p>
          概要紹介<br />
        </p>

        {/* -----------------------------------見出し１-------------------------- */}
        <h2>見出し１</h2>
        <h3>強調（太大文字）</h3>
        <p>地の文⓵</p>
        <h4>地の文⓶</h4>
        <ul>
          <li>リスト形式</li>
        </ul>
      </div>



{/* ------------------------以下はいじらない----------------------------------- */}
      {/* 右サイドコンテンツ */}
      <div className={styles.sideContents}>
        {/* プロフィール（右サイドコンテンツ） */}
        <Profile />
        {/* 過去記事アーカイブ（右サイドコンテンツ */}
        <Archive />
      </div>
    </div>
  </Layout>)
}
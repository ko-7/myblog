import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function Basic2(){
  return (<Layout>
    <div className={styles.container}>

      {/* /////////////////////メインコンテンツ//////////////////////////////// */}
      <div className={styles.mainContents}>
        {/* ---------------------------------メタ情報！！-------------------------- */}
        <div className={styles.updated}>2021年8月7日</div>
        <h1>食事制限⓵</h1>
        <img className={styles.topPhoto} src='/muscle/basic2EatTop.jpg' />
        <p>
          食事制限を始めるにあたっての準備として、基礎知識をまとめます。<br />
          とても大事な内容で、知っているだけで食事制限の成功率がぐんと上がります。
        </p>

        {/* -----------------------------------見出し１-------------------------- */}
        <h2>やり方</h2>
        <p>食事制限の流れはシンプルで、下のようになります。</p>
        <ul>
          <li>１．1日の摂取カロリーを決める</li>
          <li>２．栄養バランス(PFC)を考える</li>
          <li>３．食事制限開始！！</li>
          <li></li>
          <li></li>
        </ul>

        {/* -----------------------------------見出し２-------------------------- */}
        <h2>１．1日の摂取カロリーを決める</h2>
        
        
        <h2>見出し</h2>
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
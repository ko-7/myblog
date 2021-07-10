import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function Home(){
  return (<Layout>
    <div className={styles.container}>

      {/* メインコンテンツ */}
      <div className={styles.mainContents}>
        <div>pages/it/index</div>
        <Link href="/it/JobChange">
          <div className={styles.card}>
          <p>コンテンツ</p>
          </div>
        </Link>
      </div>


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


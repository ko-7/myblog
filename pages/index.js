import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Index.module.scss';
import Layout from '../components/Layout';

export default function Home(){
  return (<Layout>
    <div className={styles.container}>
      {/* メインコンテンツ */}
      <div className={styles.mainContents}>
        <div>メインコンテンツ</div>
        <Link href="/it/Jobchange.js">
          <div className={styles.card}>

          <p>転職</p>
          </div>
        </Link>
      </div>
      {/* 右サイドコンテンツ */}
      <div className={styles.sideContents}>
        {/* プロフィール（右サイドコンテンツ） */}
        <div className={styles.profile}>
          <div>プロフィール</div>
        </div>

        {/* 人気記事（右サイドコンテンツ）← 人気記事がでｋちあら掲載する
        <div>
          <div>人気記事</div>
        </div> */}

        {/* 過去記事アーカイブ（右サイドコンテンツ */}
        <div className={styles.history}>
          <div>過去記事アーカイブ</div>
        </div>
      </div>
    </div>
  </Layout>)
}


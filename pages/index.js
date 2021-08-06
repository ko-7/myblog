import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';

export default function Index(){
  return (<Layout>
    <div className={styles.container}>

      {/* メインコンテンツ -------------------------------------- */}
      <div className={styles.mainContents}>
        {/* 各indexページへのリンク（プログラミング、株、体づくり） */}
        <div className={styles.topCardWrapper}>
          <Link href="/it">
            <div className={styles.topCard}>
              <h1>プログラミング</h1>
              <img src="/itTop1.jpg" />
              <p>プログラミングで自分の可能性を広げる</p>
            </div>
          </Link>
          <Link href="/stock">
            <div className={styles.topCard}>
              <h1>株</h1>
              <img src="/stockTop1.jpg" />
              <p>株の長期投資で自分の時間を使わず稼ぐ</p>
            </div>
          </Link>
          <Link href="/muscle">
            <div className={styles.topCard}>
              <h1>体づくり</h1>
              <img src="/muscleTop1.jpg" />
              <p>「食事制限」＋「筋トレ」で理想の体になる</p>
            </div>
          </Link>
        </div>
        <div>pages/index</div>
        <Link href="/it/JobChange">
          <div className={styles.card}>
          <p>コンテンツ</p>
          </div>
        </Link>
      </div>


      {/* 右サイドコンテンツ ----------------------------------- */}
      <div className={styles.sideContents}>
        {/* プロフィール（右サイドコンテンツ） */}
        <Profile />
        {/* 過去記事アーカイブ（右サイドコンテンツ */}
        <Archive />
      </div>
      
    </div>
  </Layout>)
}


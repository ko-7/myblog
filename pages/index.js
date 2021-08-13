import Link from 'next/link';

import styles from '/styles/Index.module.scss';
import Layout from '/components/Layout';

import Profile from '/components/Profile';
import Archive from '/components/Archive';
import LinkToArticle1 from '/components/LinkToArticle1'

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
              <p className={styles.imgSource}>photo by Pixabay</p>
              <p>プログラミングで自分の可能性を広げる</p>
            </div>
          </Link>
          <Link href="/stock">
            <div className={styles.topCard}>
              <h1>株</h1>
              <img src="/stockTop1.jpg" />
              <p className={styles.imgSource}>Photo by Sajad Nori on Unsplash</p>
              <p>株の長期投資で自分の時間を使わず稼ぐ</p>
            </div>
          </Link>
          <Link href="/muscle">
            <div className={styles.topCard}>
              <h1>体づくり</h1>
              <img src="/muscleTop1.jpg" />
              <p className={styles.imgSource}>Photo by Gordon Cowie on Unsplash</p>
              <p>「食事制限」＋「筋トレ」で理想の体になる</p>
            </div>
          </Link>
        </div>
        
        {/* 新着記事　---------------------------------------- */}
        <h1>新着記事</h1>
        <LinkToArticle1
          path="/muscle/basic3Eat"
          date="2021年8月9日"
          title="食事制限⓶　おすすめのやり方"
        />
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


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

        {/* 新着記事　---------------------------------------- */}
        <h1>新着記事</h1>
        <LinkToArticle1
          path="/muscle/basic4Training"
          date="2021年8月11日"
          title="筋トレ　おすすめのやり方"
        />
        <LinkToArticle1
          path="/muscle/basic3Eat"
          date="2021年8月9日"
          title="食事制限⓶　おすすめのやり方"
        />
        <LinkToArticle1
          path="/muscle/basic2Eat"
          date="2021年8月7日"
          title="【重要】食事制限⓵　準備編"
        />
        <LinkToArticle1
          path="/muscle/basic1"
          date="2021年7月10日"
          title="体づくり（ダイエット＋筋トレ）を始める前に確認しておくべきこと"
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


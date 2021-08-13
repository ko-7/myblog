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
        <LinkToArticle1
          path="/it/JobChange"
          date="2021年6月20日"
          title="未経験・地方でのWeb系転職は「インフラエンジニア」「大手SES企業」が狙い目です！"
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


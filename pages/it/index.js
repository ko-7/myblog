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
        <h1>新着記事</h1>

        {/* 新着記事　---------------------------------------- */}
        <LinkToArticle1
          path="/it/JobChange"
          date="2021年6月20日"
          title="未経験・地方でのWeb系転職は「インフラエンジニア」「大手SES企業」が狙い目です！"
        />
        {/* <LinkToArticle1
          path=""
          date=""
          title=""
        /> */}
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


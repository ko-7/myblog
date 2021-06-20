import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Index.module.scss';
import Layout from '../../components/Layout';

import Profile from '../../components/Profile';
import Archive from '../../components/Archive';

export default function Home(){
  return (<Layout>
    <div className={styles.container}>

      {/* メインコンテンツ */}
      <div className={styles.mainContents}>
        <div className={styles.updated}>更新日時：2021年6月20日</div>
        <div className={styles.title}><span>J</span>obChange</div>
        <div>
          
        </div>
      </div>

{/* ------------------------以下はいじらない----------------------------------- */}
      {/* 右サイドコンテンツ */}
      <div className={styles.sideContents}>
        {/* プロフィール（右サイドコンテンツ） */}
        <Profile />
        <div className={styles.divider} />
        {/* 過去記事アーカイブ（右サイドコンテンツ */}
        <Archive />
      </div>
      
    </div>
  </Layout>)
}


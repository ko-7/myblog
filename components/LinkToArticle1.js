// 記事内に貼る関連記事へリンクのコンポーネント形式
// indexページメイン部分に表示する形式

import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/LinkToArticle.module.scss';

export default function LinkToArticle1(props) {
  let imgPath = props.path + 'Top.jpg'
  return (<div>
    <Link href={props.path}>
      <div className={styles.card}>
        <p className={styles.date}>{props.date}</p>
        <img src={imgPath} />
        <h1>{props.title}</h1>
      </div>
    </Link>
  </div>)
}


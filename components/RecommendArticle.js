// 右サイドのコンテンツ欄におすすめ記事として配置するコンポーネント形式
// リンクする記事のトップ画像、記事タイトルを表示させる

import Image from 'next/image';
import Link from 'next/link';

import styles from '/styles/Index.module.scss';

export default function RecommendArticle(props){

  return (<div>
    <p>RecommendArticle</p>
    <p>{props.text}</p>
    <p>{props.articleName}</p>
    <img src={props.articleName + 'Top.png'} />
  </div>)
}

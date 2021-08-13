// 記事内に貼る関連記事へリンクのコンポーネント形式
// 右バーに表示する形式

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

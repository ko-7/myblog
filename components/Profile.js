import Link from 'next/link';

import styles from '../styles/Index.module.scss';

export default function JobChange(){
  return (<div className={styles.profile}>
    <div className={styles.profileTitle}>自己紹介</div>
    <div className={styles.profileContents}>
      {/* <img width="60%" src="/totoro.png" /> */}
      <div>
        あきっぽく何をやっても続かなかった私が、今続いている３つのこと
        IT(Web系)、株、筋トレについて私なりの日々の工夫、その他知識を
        お伝えします。
      </div>
    </div>
  </div>)
}
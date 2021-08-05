import Link from 'next/link';

import styles from '../styles/Index.module.scss';

export default function JobChange(){
  return (<div className={styles.profile}>
    <div className={styles.profileTitle}>このブログについて</div>
    <div className={styles.profileContents}>
      {/* <img width="60%" src="/totoro.png" /> */}
      <div>
        <span>IT(Web系)</span>、<span>株</span>、<span>筋トレ</span>
        についての日々の工夫、その他知識をお伝えします。<br /><br />
        ブログタイトルの「て・く・て・く」はてくてく歩いていくように
        少しずつ前進していくイメージで名づけました。<br /><br />
        作業の合間など一息つきながら読んでいただければと思います。
      </div>
    </div>
  </div>)
}
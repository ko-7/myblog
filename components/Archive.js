import Link from 'next/link';

import styles from '../styles/Index.module.scss';

export default function JobChange(){
  return (<div className={styles.archive}>

    <div className={styles.archiveTitle}>過去の記事</div>
    <div className={styles.archiveContents}>
      <div>2021年6月</div>
    </div>
  </div>)
}


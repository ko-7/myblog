import React,{ useState } from 'react';
import Link from 'next/link';

import styles from '../styles/Layout.module.scss';

export default function Header() {
  const [ page, setPage ] = useState()
  function addClass(props){
    setPage(props)
  }
  return(
  <div className={styles.headerWrapper}>
    <Link href="/">
      <button className={styles.headerLogo}>て・く・て・く</button>
    </Link>

    <div className={styles.headerMenu}>
      <Link href="/">
        <button>全体TOP</button>
      </Link>
      <Link href="/it">
        <button>プログラミング</button>
      </Link>
      <Link href="/stock">
        <button>株</button>
      </Link>
      <Link href="/muscle">
        <button>体づくり</button>
      </Link>
    </div>
  </div>);
}
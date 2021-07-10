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
    <div className={styles.headerLogo}>
      <Link href="/">
        て・く・て・く
      </Link>
    </div>

    <div className={styles.headerMenu}>
      <Link href="/">
        <button>全体TOP</button>
      </Link>
      <Link href="/it">
        <button>IT</button>
      </Link>
      <Link href="/stock">
        <button>株</button>
      </Link>
      <Link href="/muscle">
        <button>筋トレ</button>
      </Link>
    </div>
  </div>);
}
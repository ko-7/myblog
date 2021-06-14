import React from 'react';
import Link from 'next/link';

import styles from '../styles/Layout.module.scss';

export default function Header() {

  return(<div className={styles.headerWrapper}>
    <div>
      <Link href="/">
        MyBlog
      </Link>
    </div>

    <div className={styles.headerMenu}>
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
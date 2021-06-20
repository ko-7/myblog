import React from 'react';

import styles from '../styles/Layout.module.scss';

export default function Footer(props) {

  return(<footer className={styles.footer}>
    <div>{props.footer}</div>
  </footer>);
}
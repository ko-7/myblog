import React from 'react';

import styles from '../styles/Layout.module.scss';

export default function Footer(props) {

  return(<footer style={{backgroundColor:"black",color:"white",height:'20px'}}>
    <div>{props.footer}</div>
  </footer>);
}
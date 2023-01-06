import React from 'react';
import styles from './Header.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Header = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroHeader}>Praise</div>
      <div className={styles.heroTagline}>Unlock the full potential of your community with reputation scores, rewards and deep insights.</div>
    </div>
  );
}

export default Header;
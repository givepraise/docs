import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Header.module.css';

const Header = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <div className={styles.heroHeader}>Praise</div>
      <div className={styles.heroTagline}>Acknowledge and reward community contributions, build a culture of giving and gratitude</div>
      </>
  );
}

export default Header;
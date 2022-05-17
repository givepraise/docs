import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Header.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const Header = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
        <img src="/img/banner.png" className={styles.heroBanner}/>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Setup Praise →
        </Link>        
        </div>
      </div>
  );
}

export default Header;
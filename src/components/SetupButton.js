import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './SetupButton.module.css';
import Link from '@docusaurus/Link';

const SetupButton = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Setup Praise →
        </Link>        
        </div>
      </div>
  );
}

export default SetupButton;
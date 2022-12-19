import Link from '@docusaurus/Link';
import React from 'react';
import styles from './SetupButton.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const SetupButton = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
      <div>
        <div className={styles.buttons}>
        <Link
            className="button button--secondary button--lg"
            to="/docs/how-praise-works/praise">
            Tell me more!
        </Link>        
        </div>
      </div>
  );
}

export default SetupButton;
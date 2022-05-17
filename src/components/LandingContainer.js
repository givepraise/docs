import React from 'react';
import styles from './LandingContainer.module.css';

const LandingContainer = (props) => {
  return (
      <div className={styles.landingContainer}>
        {props.children}
      </div>
  );
}

export default LandingContainer;
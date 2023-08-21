import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles['spinner-container']}>
      <div className={styles.spinner}>
        <div className={styles.glow}></div>
        <div>
          <span style={{ '--i': '0' } as React.CSSProperties}></span>
          <span style={{ '--i': '1' } as React.CSSProperties}></span>
          <span style={{ '--i': '2' } as React.CSSProperties}></span>
          <span style={{ '--i': '3' } as React.CSSProperties}></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;

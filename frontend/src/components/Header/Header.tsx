import * as React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerTitle}>React TypeScript Example</div>
        <div className={styles.searchBoxContainer}></div>
      </div>
    );
  }
}

export default Header;

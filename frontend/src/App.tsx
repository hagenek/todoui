import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <h1>Goggen</h1>
      <Footer />
    </div>
  );
}

export default App;

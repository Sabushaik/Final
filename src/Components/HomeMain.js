import React from 'react';
import styles from './HomeMain.module.css';
import img5 from "../Images/img5.jpg"

import img8 from "../Images/img8.jpg"
import img9 from "../Images/img9.jpeg"
import img7 from "../Images/img7.jpg"
import {  Link } from 'react-router-dom';
const HomeMain = () => {
  return (
    <div className={styles.container}>
      <header className={styles.heroSection}>
        <img src={img5} alt="Travel" className={styles.heroImage} />
        <div className={styles.heroText}>
          <b><h1>Welcome to Shikari</h1></b>
          <p style={{color:"yellow"}}>Your ultimate destination for Travel, Food, and Hotel Stays</p>
    <Link to="/confrom">   <button className={styles.heroButton}>Explore Now</button> </Link>
        </div>
      </header>

      <section className={styles.sections}>
        <div className={styles.section}>
          <img src={img9} alt="Travel" className={styles.sectionImage}  style={{height:'350px'}} />
          <h2>Travel</h2>
          <p style={{color:'white'}}>Discover the best travel destinations around the world.</p>
        </div>
        <div className={styles.section}>
          <img src={img7} alt="Food" className={styles.sectionImage} style={{height:'350px'}}/>
          <h2>Food</h2>
          <p style={{color:'white'}}>Explore delicious cuisines from top-rated restaurants.</p>
        </div>
        <div className={styles.section}>
          <img src={img8} alt="Hotel" className={styles.sectionImage} style={{height:'350px'}} />
          <h2>Hotel Stays</h2>
          <p style={{color:'white'}}>Find and book the most comfortable and affordable hotels.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; <b>2024 Shikari. All rights reserved.</b> </p>
      </footer>
    </div>
  );
};

export default HomeMain;

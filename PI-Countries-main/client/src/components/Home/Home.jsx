import React from "react";
import Cards from "../Cards/Cards";
import styles from './Home.module.css';
import Nav from "../Nav/Nav";
const Home = () =>{
    return (
      <div>
        <h1 className={styles.title}>Awesome Countries!</h1>
        <div className={styles.homeContainer}>
          <Cards />
        </div>
      </div>
    );
};
export default Home;
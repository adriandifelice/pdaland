import Head from "next/head";
import {useState, useEffect} from 'react';
import styles from "../styles/Home.module.css";
import CustomButton from "./components/button";

export default function Home() {
  const url = "https://calendly.com/adrian-di-felice";
  const images = [
    { name: "baking.png" },
    { name: "pane.png" },
    { name: "Assortment.png" },
    { name: "bakery.png" },
    { name: "sandwich.png" },
  ];
  const [image, setImage] = useState(images[0].name);

  
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <div className={styles.widget}>
          <h1 className={styles.h1}>Pain d'Avignon</h1>
          <div className={styles.test}>
            <CustomButton url={url} />
          </div>
        </div>
      </div>
      <div className={styles.primaryImg}>
        <img className={styles.imagen} src={image} alt="First slide" />
      </div>
    </div>
  );
}



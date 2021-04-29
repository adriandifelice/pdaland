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
  const [current, setCurrent] = useState(0)
  const [image, setImage] = useState(images[0].name);
  
  function handleClick () {
  
    if (current === images.length - 1) {
      setCurrent(0);
      setImage(images[0].name);
      return;
    }
    setCurrent(current + 1);
    setImage(images[current + 1].name)
    
}
  const newCurrent = current;
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <div className={styles.widget}>
          <h1 className={styles.h1}>Welcome!</h1>
          <p >I work with Pain d'Avignon bringing high quality baked goods for you</p>
          <div className={styles.test}>
            <CustomButton url={url} />
          </div>
        </div>
      <div className={styles.primaryImg}>
        <img className={styles.imagen} src={image} alt="First slide" />
        <button className={styles.arrow} onClick={()=> handleClick()}>Click</button>
      </div>
      </div>
    </div>
  );
}



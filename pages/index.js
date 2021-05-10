import Head from "next/head";
import {useState, useEffect} from 'react';
import styles from "../styles/Home.module.css";
import CardComponent from "./components/cardComponent";
import LogoComponent from "./components/logoComponent";

export default function Home() {
  const images = [
    { name: "baking.png" },
    { name: "burger.png" },
    { name: "pane.png" },
    { name: "Assortment.png" },
    { name: "croix.png" },
    { name: "bakery.png" },
    { name: "sandwich.png" },
  ];
  const [current, setCurrent] = useState(0)
  const [image, setImage] = useState(images[0].name);
  
  setTimeout(handleClick, 3000);
  
  function handleClick () {
    if (current === images.length - 1) {
      setCurrent(0);
      setImage(images[0].name);
      return;
    } else { 
      setCurrent(current + 1);
      setImage(images[current + 1].name)}
   
}

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <div className={styles.widget}>
          <CardComponent />
        </div>
        <div className={styles.primaryImg}>
          <img className={styles.imagen} src={image} alt="First slide" />
        </div>
      </div>
      <LogoComponent />
    </div>
  );
}



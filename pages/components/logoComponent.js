import styles from "../../styles/Home.module.css"

const LogoComponent = () => {
  return (
    <div className={styles.logoComponent}> 
      <img className={styles.logo} src='/logos/eaterny.png'></img>
      <img className={styles.logo} src='/logos/amny.png'></img>
      <img className={styles.logo} src='/logos/tnyt.png'></img>
      <img className={styles.logo} src='/logos/10best.png'></img>
    </div> 
  );
};

export default LogoComponent;


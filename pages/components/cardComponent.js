import styles from "../../styles/Home.module.css"
import CustomButton from "./button";
import {useState} from 'react';

const CardComponent = () => {
  const [currentTab, setCurrentTab] = useState('About')
  const url = "https://calendly.com/adrian-di-felice";

  const clients =   <div className={styles.contentDiv}>
                        <h4>Pain d'Avignon is a proud partner of some of the highest quality food establishments in NY including:</h4>
                        <ul>
                          <li><p className={styles.p}><b>Restaurants</b> - Serving to over 10 Michelin Stars *</p></li>
                          <li><p className={styles.p}><b>Hotels</b> - Partnering with some of the best hotels in the city</p></li>
                          <li><p className={styles.p}><b>Grocery & Specialty Stores</b> - High end grocery and specialty stores</p></li>
                        </ul>
                    </div>

  const about = <div className={styles.contentDiv}>
                    <p>Pain d’Avignon, is an award winning bakery that has been supplying Michelin-starred restaurants and top hotels for more than 25 years.</p>
                </div>

  const product = <div className={styles.contentDiv}>
                     <p>We bake, serve and eat everything fresh on the same day.</p>
                     <p>Some of the breads we make include the following</p>
                     <ul>
                       <li><b>Sourdough Breads</b> - Classic, Seeded.</li>
                       <li><b>Specialty Breads</b> - Anadama, Oat Porridge, Cranberry Pecan, Olive loaf.</li>
                       <li><b>Classic Breads</b> - Ciabatta, Francese, Baguette, Rolls, </li>
                       <li><b>Viennoisserie and Pastries</b> - Croissants, </li>
                     </ul>
                     <p><i>Delivery 365 days of the year.</i><br></br><i>Different shapes and slicing options available.</i></p>
                  </div>
  
  return (
    <div className={styles.leftCard}> 
    <div className={styles.buttonGroup}>
        <div className={styles.buttonGroupDiv}  onClick={() => setCurrentTab('About')}><button className={styles.buttonGroupItem}>About</button></div>
        <div className={styles.buttonGroupDiv}  onClick={() => setCurrentTab('Clients')}><button className={styles.buttonGroupItem}>Clients</button></div>
        <div className={styles.buttonGroupDiv}  onClick={() => setCurrentTab('Product')}><button className={styles.buttonGroupItem}>Product</button></div>
    </div>
    <div className={styles.infoDiv}>
      {currentTab === 'About'? about:currentTab === 'Clients'? clients:currentTab === 'Product'? product:null}
    </div>
    <CustomButton url={url} />
  </div> 
  );
};

export default CardComponent;



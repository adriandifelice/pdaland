import { openPopupWidget } from "react-calendly";
import styles from "../../styles/Home.module.css"

const CustomButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return <button onClick={onClick}>Custom Button</button>;
};
export default CustomButton;

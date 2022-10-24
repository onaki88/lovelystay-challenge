import styles from "./footer.module.scss";
import AppContainer from "./../components/Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AppContainer>LovelyStay Challenge</AppContainer>
    </footer>
  );
};

export default Footer;

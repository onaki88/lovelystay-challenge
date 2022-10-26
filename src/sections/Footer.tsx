import styles from "./footer.module.scss";
import AppContainer from "./../components/Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AppContainer>
        <p>LovelyStay Challenge</p>
      </AppContainer>
    </footer>
  );
};

export default Footer;

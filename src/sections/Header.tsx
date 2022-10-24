import styles from "./header.module.scss";
import AppContainer from "./../components/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <AppContainer>
        <h1 className={styles.header__title}>GitHub User Search</h1>
      </AppContainer>
    </header>
  );
};

export default Header;

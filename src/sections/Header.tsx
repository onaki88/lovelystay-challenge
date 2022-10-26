import { Link } from "react-router-dom";

import styles from "./header.module.scss";
import AppContainer from "./../components/Container";

const Header = () => {
  return (
    <header className={styles.header}>
      <AppContainer>
        <Link to="/">
          <h1 className={styles.header__title}>GitHub User Search App</h1>
        </Link>
      </AppContainer>
    </header>
  );
};

export default Header;

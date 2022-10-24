import React from "react";
import styles from "./app.module.scss";
import AppRoutes from "./Routes";
import AppHeader from "./sections/Header";
import AppFooter from "./sections/Footer";

function App() {
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.page}>
        <AppRoutes />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

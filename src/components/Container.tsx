import styles from "./container.module.scss";

const Container = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>{children}</div>
    </div>
  );
};

export default Container;

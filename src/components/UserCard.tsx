import { Link } from "react-router-dom";
import { User } from "../types/user";

import styles from "./user-card.module.scss";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.card__title}>{user.login}</h3>
      <Link className={styles.card__avatar} to={`/users/${user.login}`}>
        <img src={user.avatar_url} alt={user.login} />
      </Link>
    </article>
  );
};

export default UserCard;

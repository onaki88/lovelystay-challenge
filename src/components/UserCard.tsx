import { User } from "../types/user";
import styles from "./user-card.module.scss";
import { Link } from "react-router-dom";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className={styles.card}>
      <ul>
        <li>{user.login}</li>
        <li>
          <Link to={`/users/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserCard;

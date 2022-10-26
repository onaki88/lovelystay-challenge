import { User } from "../types/user";
import styles from "./user-info.module.scss";

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <div className={styles.info}>
      <img src={user?.avatar_url} alt={user?.name} />
      <ul>
        <li>{user?.name}</li>
        <li>{user?.location}</li>
        <li>{user?.company}</li>
        <li>{user?.bio}</li>
      </ul>
      <ul>
        <li>{user?.followers} followers</li>
        <li>{user?.following} following</li>
      </ul>
    </div>
  );
};

export default UserInfo;

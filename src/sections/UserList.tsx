import styles from "./user-list.module.scss";
import UserCard from "../components/UserCard";
import { User } from "../types/user";

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <div className={styles.list}>
      <h1 className={styles.list__title}>GitHub User List</h1>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;

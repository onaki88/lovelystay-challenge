import { User } from "../types/user";
import styles from "./user-list.module.scss";
import UserCard from "../components/UserCard";

type Props = {
  users: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <section className={styles.list}>
      <h1 className={styles.list__title}>GitHub User List</h1>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </section>
  );
};

export default UserList;

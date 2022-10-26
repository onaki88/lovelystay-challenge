import { useState, useEffect } from "react";
import { User } from "../types/user";
import { getUserProfile } from "../api";

import styles from "./user-info.module.scss";

type Props = {
  username: string;
};

const UserInfo = ({ username }: Props) => {
  const [user, setUser] = useState<User>();

  const fetchData = async () => {
    if (username) {
      getUserProfile(username)
        .then(({ data }) => setUser(data))
        .catch(() => {
          console.log("ERROR");
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className={styles.info}>
      <h1 className={styles.list__title}>{user?.name}</h1>
      <img src={user?.avatar_url} alt={user?.name} />
      <ul>
        <li>{user?.location}</li>
        <li>{user?.company}</li>
        <li>{user?.bio}</li>
      </ul>
      <ul>
        <li>{user?.public_repos} public repos</li>
        <li>{user?.followers} followers</li>
        <li>{user?.following} following</li>
      </ul>
    </section>
  );
};

export default UserInfo;

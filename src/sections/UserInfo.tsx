import { User } from "../types/user";
import styles from "./user-info.module.scss";
import { useState, useEffect } from "react";
import { getUserProfile } from "../api";

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
    <div className={styles.info}>
      <img src={user?.avatar_url} alt={user?.name} />
      <ul>
        <li>{user?.name}</li>
        <li>{user?.location}</li>
        <li>{user?.company}</li>
        <li>{user?.bio}</li>
      </ul>
      <ul>
        <li>{user?.public_repos} public repos</li>
        <li>{user?.followers} followers</li>
        <li>{user?.following} following</li>
      </ul>
    </div>
  );
};

export default UserInfo;

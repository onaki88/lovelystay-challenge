import styles from "./user.module.scss";
import AppContainer from "../components/Container";
import { User } from "../types/user";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = () => {
  const { username } = useParams();
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
  return <AppContainer>{user && <p>{user.name}</p>}</AppContainer>;
};

export default Profile;

import styles from "./user.module.scss";
import AppContainer from "../components/Container";
import UserInfo from "../components/UserInfo";
import RepoList from "../sections/RepoList";
import { User } from "../types/user";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserProfile, getUserRepos } from "../api";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchData = async () => {
    if (username) {
      getUserProfile(username)
        .then(({ data }) => setUser(data))
        .catch(() => {
          console.log("ERROR");
        });
      getUserRepos(username)
        .then(({ data }) => setRepos(data))
        .catch(() => {
          console.log("ERROR");
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContainer>
      <UserInfo user={user}></UserInfo>
      <RepoList total={user?.public_repos} repos={repos}></RepoList>
    </AppContainer>
  );
};

export default Profile;

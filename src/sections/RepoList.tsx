import styles from "./repo-list.module.scss";
import RepoCard from "../components/RepoCard";
import { Repo } from "../types/repo";
import { useState, useEffect } from "react";
import { getUserRepos } from "../api";

type Props = {
  username: string;
};

const RepoList = ({ username }: Props) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchData = async () => {
    if (username) {
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
    <div className={styles.list}>
      <h3 className={styles.list__title}>Repos list</h3>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default RepoList;

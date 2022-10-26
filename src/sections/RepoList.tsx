import { useState, useEffect } from "react";
import { Repo } from "../types/repo";
import { getUserRepos } from "../api";

import RepoCard from "../components/RepoCard";
import styles from "./repo-list.module.scss";

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
    <section className={styles.list}>
      <h3 className={styles.list__title}>Repos list</h3>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </section>
  );
};

export default RepoList;

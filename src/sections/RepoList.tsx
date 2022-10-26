import styles from "./repo-list.module.scss";
import RepoCard from "../components/RepoCard";
import { Repo } from "../types/repo";

type Props = {
  total: string;
  repos: Repo[];
};

const RepoList = ({ total, repos }: Props) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.list__title}>{total} repos</h3>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

export default RepoList;

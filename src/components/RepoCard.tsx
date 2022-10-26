import { Repo } from "../types/repo";
import styles from "./repo-card.module.scss";

type Props = {
  repo: Repo;
};

const RepoCard = ({ repo }: Props) => {
  return (
    <div className={styles.card}>
      <ul>
        <li>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
        <li>{repo.visibility}</li>
        <li>{repo.description}</li>
      </ul>
    </div>
  );
};

export default RepoCard;

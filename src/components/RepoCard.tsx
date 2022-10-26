import { Repo } from "../types/repo";

import styles from "./repo-card.module.scss";

type Props = {
  repo: Repo;
};

const RepoCard = ({ repo }: Props) => {
  return (
    <div className={styles.card}>
      <label>{repo.visibility}</label>
      <a className={styles.card__title} href={repo.html_url}>
        <h3>{repo.name}</h3>
      </a>
      <p>{repo.description}</p>
    </div>
  );
};

export default RepoCard;

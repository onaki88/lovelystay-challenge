import { useRef } from "react";
import { User } from "../types/user";
import { getUsers } from "../api";

import styles from "./search.module.scss";

type Props = {
  handleResults: (users: User[]) => void;
};

const SearchForm = ({ handleResults }: Props) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;

    if (username) {
      getUsers(username)
        .then(({ data }) => {
          handleResults(data.items);
        })
        .catch(() => {
          console.log("ERROR");
        });
    }
  };

  return (
    <section className={styles.search}>
      <form className={styles.search__form} onSubmit={handleSubmit}>
        <input placeholder="username" type="text" ref={usernameRef} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SearchForm;

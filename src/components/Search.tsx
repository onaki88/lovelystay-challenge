import styles from "./search.module.scss";
import { useRef } from "react";
import { User } from "../types/user";
import { getUsers } from "../api";

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
    <form onSubmit={handleSubmit}>
      <input placeholder="username" type="text" ref={usernameRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;

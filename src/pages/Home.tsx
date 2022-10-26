import { useState } from "react";
import { User } from "../types/user";

import AppContainer from "./../components/Container";
import Search from "./../components/Search";
import UserList from "./../sections/UserList";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <AppContainer>
      <Search handleResults={(users: User[]) => setUsers(users)} />
      <UserList users={users} />
    </AppContainer>
  );
};

export default Home;

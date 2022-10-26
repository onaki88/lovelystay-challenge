import styles from "./user.module.scss";
import AppContainer from "../components/Container";
import UserInfo from "../sections/UserInfo";
import RepoList from "../sections/RepoList";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();

  return (
    <AppContainer>
      <UserInfo username={username}></UserInfo>
      <RepoList username={username}></RepoList>
    </AppContainer>
  );
};

export default Profile;

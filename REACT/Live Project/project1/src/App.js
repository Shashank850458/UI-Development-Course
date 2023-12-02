import CreateAccount from "./account/register";
import Mylogin from "./account/login";
import EditMyProfile from "./account/editprofile";
import ViewMyProfile from "./account/viewprofile";

function App() {
  return (
    <>
      <CreateAccount/>
      <Mylogin/>
      <ViewMyProfile/>
      <EditMyProfile/>
    </>
  );
}

export default App;

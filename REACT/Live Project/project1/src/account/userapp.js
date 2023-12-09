import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import EditMyProfile from "./editprofile";
import ViewMyProfile from "./viewprofile";


function UserDashboard() {
  return (
    <HashRouter>
        <Link to="/"> Dashboard</Link>
        <Link to="/viewprofile"> View Profile </Link>
        <Link to="/editprofile"> Edit Profile </Link>
        <button onClick={logout}> Hi, { localStorage.getItem("name") } - Logout </button>

      <Routes>
          <Route exact path="/" element={ <ViewMyProfile/> }/>
          <Route exact path="/editprofile" element={ <EditMyProfile/> }/>
          <Route exact path="/viewprofile" element={ <ViewMyProfile/> }/>
      </Routes>
    </HashRouter>
  );
}

export default UserDashboard;

const logout = () =>{
    localStorage.clear();
    window.location.reload();
}

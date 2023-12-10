import {HashRouter, Routes, Route, Link} from 'react-router-dom';

import EditMyProfile from "./editprofile";
import ViewMyProfile from "./viewprofile";


function UserDashboard() {
  return (
    <HashRouter>
        <div className="container mt-3">
        <div className="row">
            <div className="col-lg-5 text-center">
              <h2 className="text-primary">
              <i className="fa fa-users text-danger"></i> <br/>Manage Profile
              </h2>
            </div>

            <div className="col-lg-7 text-end">
            <div className="btn-group">
            <Link to="/" className="btn btn-primary"> Dashboard</Link>
            <Link to="/viewprofile" className='btn btn-success'> View Profile </Link>
            <Link to="/editprofile" className='btn btn-warning'> Edit Profile </Link>
            <button onClick={logout} className='btn btn-danger'> 
               Hi, { localStorage.getItem("name") } - Logout
             </button>
             </div>
            </div>
        </div>
        
        </div>

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

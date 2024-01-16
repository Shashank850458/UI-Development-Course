import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./user";
import Mybook from "./book";
import EditUser from "./edituser";
import Mypic from "./mypic";


function App() {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand"> MERN Stack </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/user">Manage User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/book">Manage Book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/customer">Manage Customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/photo">Image Upload</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" onClick={logout}>
                  Welcome - {localStorage.getItem("name") } - Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
         <Route exact path="/user" element={<Myuser/>}/>
         <Route exact path="/edituser/:id" element={<EditUser/>}/>
         <Route exact path="/book" element={<Mybook/>}/>
         <Route exact path="/photo" element={<Mypic/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;


const logout = () => {
  localStorage.clear();
  window.location.reload();
}

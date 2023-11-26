import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Mydashboard from "./dashboard";
import Mybook from "./book";
import Myuser from "./user";
import Myproduct from "./product";
import Myapi from "./api";

function App() {
  return (
    <HashRouter>
       <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="text-danger">React & Redux</h1>
          </div>
          <div className="col-lg-9 text-end">
            <div className="btn-group">
       
          <Link to="/" className="btn btn-primary"> My Dashboard</Link>
          <Link to="/book" className="btn btn-secondary"> Manage Book</Link>
          <Link to="/user" className="btn btn-info"> Manage User</Link>
          <Link to="/product" className="btn btn-warning"> Manage Product</Link>
          <Link to="/api" className="btn btn-success"> Manage API</Link>
          </div>
          </div>
        </div>
       </div>
     <Routes>
      <Route exact path="/" element={<Mydashboard/>} />
      <Route exact path="/book" element={<Mybook/>} />
      <Route exact path="/user" element={<Myuser/>} />
      <Route exact path="/product" element={<Myproduct/>} />
      <Route exact path="/api" element={<Myapi/>} />

      </Routes>

    </HashRouter>
    
  );
}

export default App;

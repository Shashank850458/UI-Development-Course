import { HashRouter,Routes,Route,Link } from "react-router-dom";
import Mydashboard from "./dashboard";
import Newproduct from "./newproduct";
import Myproduct from "./productlist";
import Myorder from "./orderlist";
import ViewMyProfile from "../account/viewprofile";
import EditMyProfile from "../account/editprofile";

const SellerApp =() =>{
     return (
        <HashRouter>

        <div className="container mt-3">
        <div className="row">
            <div className="col-lg-3 text-center">
              <h2 className="text-primary">
              <i className="fa fa-shopping-bag text-danger"></i> <br/>Seller CRM
              </h2>
            </div>

            <div className="col-lg-9 text-end">
            <div className="btn-group">
            <Link to="/" className="btn btn-primary"> Dashboard</Link>
            <Link to="/newproduct" className="btn btn-primary"> New Product</Link>
            <Link to="/productlist" className="btn btn-primary"> All Products</Link>
            <Link to="/orderlist" className="btn btn-primary"> Manage orders</Link>
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
                <Route exact path="/" element={<Mydashboard/>}/>
                <Route exact path="/newproduct" element={<Newproduct/>}/>
                <Route exact path="/productlist" element={<Myproduct/>}/>
                <Route exact path="/orderlist" element={<Myorder/>}/>
                <Route exact path="/viewprofile" element={<ViewMyProfile/>}/>
                <Route exact path="/editprofile" element={<EditMyProfile/>}/>
            </Routes>
        </HashRouter>
     )
}

export default SellerApp;

const logout = () =>{
    localStorage.clear();
    window.location.reload();
}
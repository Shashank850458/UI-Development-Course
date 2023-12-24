import {Link} from "react-router-dom";
const CommonHeader =() =>{
    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top bg-dark p-3">
  <div className="container">
    <a className="navbar-brand"><i className="fa fa-shpping-bag"></i> Shoppng@Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li class="nav-item me-4">
          <Link className="nav-link active" to="/"><i className="fa fa-home"></i> Shopping</Link>
        </li>
        <li class="nav-item me-4">
          <Link className="nav-link active" to="/cart"><i className="fa fa-shopping-cart"></i> My Cart</Link>
        </li>
        <li class="nav-item me-4">
          <Link className="nav-link active" to="/register"><i className="fa fa-user-plus"></i> Create Account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/login"><i className="fa fa-lock"></i> Login</Link>
        </li>
        
      </ul>
      
    </div>
    </div>
    </nav>
    )
}

export default CommonHeader;
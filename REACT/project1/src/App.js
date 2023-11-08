import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./basic/user.js";
import Myproduct from "./basic/product.js";
import Booklist from "./basic/book.js";
import Mycity from "./basic/city.js";
import Mycustomer from "./basic/customer.js";
import Myhook1 from "./hooks/page1.js";

function App() {
  return (
    <HashRouter>
      <ul>
        <li><Link to="/" className="toplink">User</Link></li>
        <li><Link to="/product" className="toplink">Product</Link></li>
        <li><Link to="/book" className="toplink">Books</Link></li>
        <li><Link to="/city" className="toplink">City</Link></li>
        <li><Link to="/customer" className="toplink">Customer</Link></li>
        <li><Link to="/hook1" className="toplink">Hook1</Link></li>
      </ul>

      <Routes>
         <Route exact path="/" element= {<Myuser/>} />
         <Route exact path="/product" element= {<Myproduct/>} />
         <Route exact path="/book" element= {<Booklist/>} />
         <Route exact path="/city" element= {<Mycity/>} />
         <Route exact path="/customer" element= {<Mycustomer/>} />
         <Route exact path="/hook1" element= {<Myhook1/>} />

      </Routes>
    
    </HashRouter>
  );
}

export default App;

// Myuser();
// <Myuser/>
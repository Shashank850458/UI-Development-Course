import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./basic/user.js";
import Myproduct from "./basic/product.js";
import Booklist from "./basic/book.js";
import Mycity from "./basic/city.js";

function App() {
  return (
    <HashRouter>
      <ul>
        <li><Link to="/user" className="toplink">User</Link></li>
        <li><Link to="/product" className="toplink">Product</Link></li>
        <li><Link to="/book" className="toplink">Books</Link></li>
        <li><Link to="/city" className="toplink">City</Link></li>
      </ul>

      <Routes>
         <Route exact path="/user" element= {<Myuser/>} />
         <Route exact path="/product" element= {<Myproduct/>} />
         <Route exact path="/book" element= {<Booklist/>} />
         <Route exact path="/city" element= {<Mycity/>} />
      </Routes>
    
    </HashRouter>
  );
}

export default App;

// Myuser();
// <Myuser/>
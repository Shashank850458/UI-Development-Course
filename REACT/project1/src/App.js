import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myuser from "./basic/user.js";
import Myproduct from "./basic/product.js";
import Booklist from "./basic/book.js";
import Mycity from "./basic/city.js";
import Mycustomer from "./basic/customer.js";
import Myhook1 from "./hooks/page1.js";
import Myhook2 from "./hooks/page2.js";
import Myhook3 from "./hooks/page3.js";
import Myhook4 from "./hooks/page4.js";
import Myhome from "./hooks/homework.js";

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
        <li><Link to="/hook2" className="toplink">Hook2</Link></li>
        <li><Link to="/hook3" className="toplink">Hook3</Link></li>
        <li><Link to="/hook4" className="toplink">Hook4</Link></li>
        <li><Link to="/home" className="toplink">Homework</Link></li>
      </ul>

      <Routes>
         <Route exact path="/" element= {<Myuser/>} />
         <Route exact path="/product" element= {<Myproduct/>} />
         <Route exact path="/book" element= {<Booklist/>} />
         <Route exact path="/city" element= {<Mycity/>} />
         <Route exact path="/customer" element= {<Mycustomer/>} />
         <Route exact path="/hook1" element= {<Myhook1/>} />
         <Route exact path="/hook2" element= {<Myhook2/>} />
         <Route exact path="/hook3" element= {<Myhook3/>} />
         <Route exact path="/hook4" element= {<Myhook4/>} />
         <Route exact path="/home" element= {<Myhome/>} />

      </Routes>
    
    </HashRouter>
  );
}

export default App;

// Myuser();
// <Myuser/>
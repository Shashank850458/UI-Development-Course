import {HashRouter,Routes,Route,Link} from 'react-router-dom';
import Mycompany from "./homework/company.js";
import Mycity from "./homework/city.js";
import Mycustomer from "./homework/customer.js";
import Myemployee from "./homework/employee.js";
import Myitem from "./homework/item.js";

function App() {
    return(
      <HashRouter>
         <ul>
         <li><Link to="/company" className="toplink">Company</Link></li>
         <li><Link to="/city" className="toplink">City</Link></li>
         <li><Link to="/customer" className="toplink">Customer</Link></li>
         <li><Link to="/employee" className="toplink">Employee</Link></li>
         <li><Link to="/item" className="toplink">Item</Link></li>
         </ul>

         <Routes>
            <Route exact path="/company" element= {<Mycompany/>}/>
            <Route exact path="/city" element= {<Mycity/>}/>
            <Route exact path="/customer" element= {<Mycustomer/>}/>
            <Route exact path="/employee" element= {<Myemployee/>}/>
            <Route exact path="/item" element= {<Myitem/>}/>
         </Routes>
       
    
      </HashRouter>
    )
}
export default App;

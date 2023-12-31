import {HashRouter,Routes,Route,Link} from 'react-router-dom';
import Mybook from "./book";
import Myuser from "./user";
import Mycity from './city';
import Myproduct from "./product";
import Mycustomer  from './customer';
import Myfile from './myfile';
import Myemail from './email';
  
function App() {
  return(
    <HashRouter>
    <table align='center' cellPadding="15">
      <tbody>
         <tr>
           <th><Link to="/">Books</Link></th>
           <th><Link to="/user">User</Link></th>
           <th><Link to="/customer">Customer</Link></th>
           <th><Link to="/product">Product</Link></th>
           <th><Link to="/city">City</Link></th>
           <th><Link to="/file">File Read Write</Link></th>
           <th><Link to="/email">Email</Link></th>
         </tr>
      </tbody>

    </table>

         <Routes>
             <Route exact path="/" element={<Mybook/>}/>
             <Route exact path="/user" element={<Myuser/>}/>
             <Route exact path='/city' element={<Mycity/>} />
             <Route exact path='/product' element={<Myproduct/>} /> 
             <Route exact path='/customer' element={<Mycustomer/>} />
             <Route exact path='/file' element={<Myfile/>}/>
             <Route exact path='/email' element={<Myemail/>}/>
         </Routes>
         
    </HashRouter>
  );
}

export default App;
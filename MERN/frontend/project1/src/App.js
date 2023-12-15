import {HashRouter,Routes,Route,Link} from 'react-router-dom';
import Mybook from "./book";
import Myuser from "./user";
import Mycity from './city';
import Myproduct from "./product";
  
function App() {
  return(
    <HashRouter>
    <table align='center' cellPadding="15">
      <tbody>
         <tr>
           <th><Link to="/">Books</Link></th>
           <th><Link to="/user">User</Link></th>
         </tr>
      </tbody>

    </table>
      <section>
      <aside>
        <div><Link to="/product">Product</Link></div>
        <div><Link to="/city">City</Link></div>

      </aside>
      <article>
         <Routes>
             <Route exact path="/" element={<Mybook/>}/>
             <Route exact path="/user" element={<Myuser/>}/>
             <Route exact path='/city' element={<Mycity/>} />
             <Route exact path='/product' element={<Myproduct/>} /> 
         </Routes>
      </article>  
      </section>
    </HashRouter>
  );
}

export default App;
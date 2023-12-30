import {HashRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from "./account/register";
import Mylogin from "./account/login";
import Myhome from './home';
import Mycart from './cart';
import CommonHeader from './header';

function App() {
  return (
    <HashRouter>
      <CommonHeader/>

    <Routes>
       <Route exact path="/" element={ <Myhome/>}/>
       <Route exact path="/cart" element={ <Mycart/>}/>
       <Route exact path="/register" element={ <CreateAccount/>}/>
       <Route exact path="/login" element={ <Mylogin/>}/>
       
    </Routes>
    
    </HashRouter>
  );
}

export default App;

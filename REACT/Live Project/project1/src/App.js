import {HashRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from "./account/register";
import Mylogin from "./account/login";

import CommonHeader from './header';

function App() {
  return (
    <HashRouter>
    <CommonHeader/>

    <Routes>
       <Route exact path="/register" element={ <CreateAccount/>}/>
       <Route exact path="/login" element={ <Mylogin/>}/>
     
    </Routes>
    
    </HashRouter>
  );
}

export default App;

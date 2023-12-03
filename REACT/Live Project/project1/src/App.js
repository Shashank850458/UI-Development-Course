import {HashRouter, Routes, Route, Link} from 'react-router-dom'
import CreateAccount from "./account/register";
import Mylogin from "./account/login";
import EditMyProfile from "./account/editprofile";
import ViewMyProfile from "./account/viewprofile";
import CommonHeader from './header';

function App() {
  return (
    <HashRouter>
    <CommonHeader/>

    <Routes>
       <Route exact path="/register" element={ <CreateAccount/>}/>
       <Route exact path="/login" element={ <Mylogin/>}/>
       <Route exact path="/editprofile" element={ <EditMyProfile/>}/>
       <Route exact path="/viewprofile" element={  <ViewMyProfile/>}/>
    </Routes>
    
    </HashRouter>
  );
}

export default App;

import Login from './pages/login'
import Home from  './pages/manager/home';
import Dashboard from './pages/manager/dashboard';
import Cooks from './pages/manager/cooks';
import SignUp from './pages/signup';
import { Routes,Route } from 'react-router-dom';
import NoMatch from './components/notmatch';
import Landing from './pages/landning';
import OtpVerify from './pages/opt';
import Settings from './pages/manager/settings';
import Menu from './pages/manager/menu';
import CookHome from './pages/cook/home'
const App=()=>{
   return(
    <>
    <Routes>
       <Route index element={<Landing/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/otpverify" element={<OtpVerify/>}/>

        {/* Managerial Routes */}
       <Route exact path="/home" element={<Home/>}>
         <Route index element={<Dashboard/>}/>
         <Route path="cooks" element={<Cooks/>}/>
         <Route path="settings" element={<Settings/>}/>
         <Route path="menu" element={<Menu/>}/>
       </Route>

       {/* Cooks Routes */}
       <Route exact path="/cook-home" element={<CookHome/>}>
       </Route>


       <Route path="*" element={<NoMatch/>}/>

    </Routes>
    </>
   )
}

export default App
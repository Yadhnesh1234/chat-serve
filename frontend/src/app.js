import { Routes,Route } from 'react-router-dom';

import Login from './pages/login'
import SignUp from './pages/signup';
import NoMatch from './components/notmatch';
import Landing from './pages/landning';
import OtpVerify from './pages/opt';

import Home from  './pages/manager/home';
import Dashboard from './pages/manager/dashboard';
import Cooks from './pages/manager/cooks';
import Settings from './pages/manager/settings';
import Menu from './pages/manager/menu';
import TransacHistory from './pages/manager/transactionHistory';

import CookHome from './pages/cook/home'
import CookDashboard from './pages/cook/dashboard';
import Profile from './pages/cook/Profile';
import Explore  from './pages/cook/explore'

import UserHome from './pages/user/home';
import UserDashboard from './pages/user/dashboard';
import Cart from './pages/user/cart';

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
         <Route path="transactions" element={<TransacHistory/>}/>
       </Route>

       {/* Cooks Routes */}
       <Route exact path="/cook-home" element={<CookHome/>}>
          <Route index element={<CookDashboard/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="explore" element={<Explore/>}/>
       </Route>

       {/* User Routes */}
       <Route exact path="/user-home/:tableId" element={<UserHome/>}>
          <Route index element={<UserDashboard/>}/>
          <Route path="cart" element={<Cart/>}/>
       </Route>

       <Route path="*" element={<NoMatch/>}/>

    </Routes>
    </>
   )
}

export default App
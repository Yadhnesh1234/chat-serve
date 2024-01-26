import Login from './pages/login'
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Tables from './pages/tables';
import { Routes,Route } from 'react-router-dom';
import NoMatch from './components/notmatch';
import Landing from './pages/landning';

const App=()=>{
   return(
    <>
    <Routes>
       <Route index element={<Landing/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route exact path="/home" element={<Home/>}>
         <Route index element={<Dashboard/>}/>
         <Route path="tables" element={<Tables/>}/>
       </Route>
       <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </>
   )
}

export default App
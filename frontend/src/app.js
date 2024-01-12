import Home from './pages/home'
import About from './pages/about';
import { Routes,Route } from 'react-router-dom';

const App=()=>{
   return(
    <>
    <Routes>
       <Route path="/" Component={Home}></Route>
       <Route path="/about" Component={About}></Route>
    </Routes>
    </>
   )
}

export default App
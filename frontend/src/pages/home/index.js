import { useSelector,useDispatch } from "react-redux"
import {login} from '../../utility/action/userAction'
import { useEffect } from "react";
const Home = ()=>{
    
    const user = useSelector((state) => state.user);
    const dispatch=useDispatch()

    useEffect(()=>{

      console.log(user)

    },[user])

return(
    <>
    
    <h1>Hello I am Home </h1>
    <button onClick={()=>{dispatch(login("DummyToken123","Yadhnesh"))}}>Login</button>

    </>
)

}

export default Home
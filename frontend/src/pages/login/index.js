import { useSelector,useDispatch } from "react-redux"
import {login} from '../../utility/action/userAction'
import { useEffect } from "react";
const Login = ()=>{
    
    const user = useSelector((state) => state.user);
    const dispatch=useDispatch()

    useEffect(()=>{

      console.log(user)

    },[user])

return(
    <>
    I am Login
    </>
)

}

export default Login
import { Outlet } from "react-router-dom"
const Home = ()=>{
    return(
        <>
        <Outlet/>
        <h1>Home</h1>
        </>
    )
}

export default Home
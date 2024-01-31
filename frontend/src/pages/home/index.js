import { Outlet } from "react-router-dom"
import Sidebar from "../../components/sidebar"
import Navbar from "../../components/navbar"
const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: "#F1F1F1" }} className="flex h-screen">
                <div className="w-2/12">
                   <Sidebar/>
                </div>
                <div  className="w-10/12 mr-12">
                    <div className="flex justify-center py-4">
                        <Navbar/>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
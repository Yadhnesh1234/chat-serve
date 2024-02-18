import { Outlet } from "react-router-dom"
import BottomNav from "../../../components/bottomnav"
const CookHome = () => {
    return (
        <>
            <div style={{ backgroundColor: "#F1F1F1" }} className="flex h-screen flex-col">
                <div>
                   <Outlet/>
                   <BottomNav/>
                </div>
                <div>       
                </div>
            </div>
        </>
    )
}

export default CookHome
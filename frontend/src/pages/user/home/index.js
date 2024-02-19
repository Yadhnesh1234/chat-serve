import { Outlet } from "react-router-dom"
import BottomNav from "../../../components/bottomnav"
const UserHome=()=>{
    return (
        <>
            <div>
                <Outlet />
                <BottomNav />
            </div>
        </>
    )
}

export default UserHome
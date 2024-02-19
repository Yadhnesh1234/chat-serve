import { Outlet } from "react-router-dom"
import BottomNav from "../../../components/bottomnav"
const CookHome = () => {
    return (
        <>
            <div>
                <Outlet />
                <BottomNav />
            </div>
        </>
    )
}

export default CookHome
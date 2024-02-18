import { Outlet } from "react-router-dom"
import BottomNav from "../../../components/bottomnav"
const CookHome = () => {
    return (
        <>
            <div style={{ backgroundColor: "#F1F1F1" }} className="flex h-full">
                <div className="w-2/12">
                   <BottomNav/>
                </div>
                <div  className="w-10/12 mr-12">
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CookHome
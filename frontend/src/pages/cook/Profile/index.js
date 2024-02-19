import CookProfile from "../../../components/cookprofile"

const Profile=()=>{
    return(
        <>
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex py-2 rounded-md bg-white justify-start shadow-[0px_4px_11px_4px_#00000024] w-[96%] m-12">
            <div style={{fontFamily:"'Open Sans', sans-serif"}} className="mr-10 p-4">
                <h1 className="text-2xl font-bold text-primary">Profile</h1>
            </div>
       </div>
        <CookProfile/>
    </div>
        </>
    )
}
export default Profile 
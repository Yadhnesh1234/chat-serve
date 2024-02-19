import OrderCard from "../../../components/ordercard"
const CookDashboard = () => {
    return (
        <>
        <div className="h-screen w-screen flex flex-col">
        <div className="flex py-2 rounded-md bg-white justify-start shadow-[0px_4px_11px_4px_#00000024] w-[96%] m-12">
            <div style={{fontFamily:"'Open Sans', sans-serif"}} className="mr-10 p-4">
                <h1 className="text-2xl">Current Orders</h1>
            </div>
       </div>
        <div className="w-full h-full flex flex-wrap justify-center items-center mb-10 overflow-y-auto">
        {[1,2,3,4,5,6,7,8].map(()=>{
            return(
            <>
            <div className="m-10">
            <OrderCard/>
            </div>
            </>
           )
        })}
        </div>
        </div>
        </>
    )
}

export default CookDashboard
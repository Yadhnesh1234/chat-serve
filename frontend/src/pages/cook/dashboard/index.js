import OrderCard from "../../../components/ordercard"
const CookDashboard = () => {
    return (
        <>
        <div className="h-screen w-screen flex flex-col items-center">
            <h1 className="text-2xl">Current Orders</h1>
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
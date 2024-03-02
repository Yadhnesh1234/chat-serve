
const Transaction=()=>{
    return(
      <>
        <div className="flex justify-center w-full h-screen overflow-auto">
            <div className="flex flex-col w-full items-center mt-10">
              <div className="flex justify-between w-[60%] px-2">
                <h2 className="text-3xl font-bold">Today</h2>
                <p className="text-3xl font-bold">$700</p>
              </div>
              {[2,3,4,5,6,10,10].map(()=>{
                return(
                <>
                  <div className="flex justify-between w-[60%] h-[8%] rounded-md bg-white mt-2 py-6 px-2 ">
                    <div className="flex justify-between w-[32%]">
                      <p className="text-2xl">3:45PM</p>
                      <p className="text-2xl">Table No : 1</p>
                    </div>
                    <div>
                      <p className="text-2xl font-semibold">$700</p>
                    </div>
                  </div>
                </>
                )
              })}
            </div>
        </div>
      </>
    )
}

export default Transaction
const Table=({color})=>{


        if(color===1){
            return(
               <>
                <div className={`w-[12rem] h-[10rem] bg-orange-200 hover:bg-orange-400 rounded flex flex-col justify-center items-center cursor-pointer`}>
                <h1 className="text-2xl">Table No 1</h1>
                <p><b>Capacity : </b>6 peoples</p>
                </div>
                </>
            )
        }
        if(color===2){
            return (
                <>
                <div className={`w-[12rem] h-[10rem] bg-blue-200 hover:bg-blue-400 rounded flex flex-col justify-center items-center cursor-pointer`}>
                <h1 className="text-2xl">Table No 1</h1>
                <p><b>Capacity : </b>6 peoples</p>
                </div>
                </>
            )
        }
        if(color===3){
            return (
                <>
                <div className={`w-[12rem] h-[10rem] bg-green-200 hover:bg-green-400 rounded flex flex-col justify-center items-center cursor-pointer`}>
                <h1 className="text-2xl">Table No 1</h1>
                <p><b>Capacity : </b>6 peoples</p>
                </div>
                </>
            )
        }
 
}

export default Table
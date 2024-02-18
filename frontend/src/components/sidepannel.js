const SidePannel = () => {
    return (
        <>
            <div className="bg-white w-[18.5%] rounded-md h-[87%] fixed">
                <div className="flex flex-col items-center w-full h-full py-12">
                    <h2 className="text-4xl text-primary font-bold">Table No : 1</h2>
                    <div className="h-2/4 pt-10">
                        <div className="flex pr-20 w-full">
                            <h1 className="text-2xl font-bold text-neutral-500">Current Orders : </h1>
                        </div>
                        <div className="flex justify-between mt-2">
                                <p className="text-xl font-bold">Item</p>
                                <span className="text-xl font-bold">QTY</span>
                        </div>
                        <ul className="mt-3 w-full h-[80%] " style={{overflow:"auto"}}>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium">1</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium">1</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium">1</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium">1</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium">1</span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-[40%] pt-10">
                        <div className="flex pr-20 w-full">
                            <h1 className="text-2xl font-bold text-neutral-500">Served Orders : </h1>
                        </div>
                        <div className="flex justify-between mt-2">
                                <p className="text-xl font-bold">Item</p>
                                <span className="text-xl font-bold">QTY</span>
                        </div>
                        <ul className="mt-3 w-full h-[55%] " style={{overflow:"auto"}}>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">Puri Bhaji</p>
                                <span className="text-xl font-medium text-center">2</span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-1/4">
                        <div className="flex pr-20 w-full text-neutral-500">
                            <h1 className="text-2xl font-bold">Total Amount : </h1>
                        </div>
                        <ul className="mt-3 w-full h-[80%] " style={{overflow:"auto"}}>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">In RS.</p>
                                <span className="text-xl font-medium text-center">200000000000</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidePannel
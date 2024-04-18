import { useState, useEffect } from "react";

const SidePannel = ({ table }) => {
    const [orders, setOrders] = useState({ waiting_orders: [], served_orders: [], total_bill: 0 });

    useEffect(() => {
        const fetchTableOrders = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/table-orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        table_id: table
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch table orders');
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching table orders:', error);
                // Handle error
            }
        };
        fetchTableOrders();
    }, [table]);

    return (
        <>
            <div className="bg-white w-[18.5%] rounded-md h-[87%] fixed">
                <div className="flex flex-col items-center w-full h-full py-12">
                    <h2 className="text-4xl text-primary font-bold">Table No : {table}</h2>
                    <div className="h-2/4 pt-10">
                        <div className="flex pr-20 w-full">
                            <h1 className="text-2xl font-bold text-neutral-500">Current Orders : </h1>
                        </div>
                        <div className="flex justify-between mt-2">
                            <p className="text-xl font-bold">Item</p>
                            <span className="text-xl font-bold">QTY</span>
                        </div>
                        <ul className="mt-3 w-full h-[80%] " style={{ overflow: "auto" }}>
                            {orders.waiting_orders.map(order => (
                                <li key={order.order_id} className="flex justify-between mt-2">
                                    <p className="text-lg">{order.product_name}</p>
                                    <span className="text-xl font-medium text-center">{order.quantity}</span>
                                </li>
                            ))}
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
                        <ul className="mt-3 w-full h-[55%] " style={{ overflow: "auto" }}>
                            {orders.served_orders.map(order => (
                                <li key={order.order_id} className="flex justify-between mt-2">
                                    <p className="text-lg">{order.product_name}</p>
                                    <span className="text-xl font-medium text-center">{order.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="h-1/4">
                        <div className="flex pr-20 w-full text-neutral-500">
                            <h1 className="text-2xl font-bold">Total Amount : </h1>
                        </div>
                        <ul className="mt-3 w-full h-[80%] " style={{ overflow: "auto" }}>
                            <li className="flex justify-between mt-2">
                                <p className="text-lg">In RS.</p>
                                <span className="text-xl font-medium text-center">{orders.total_bill}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidePannel;

import { useEffect, useState } from 'react';
import { usePDF } from 'react-to-pdf';
import { useParams } from 'react-router-dom';

const Cart = () => {
    const { tableId } = useParams(); // Get tableId from URL parameters
    const { toPDF, targetRef } = usePDF({ filename: `table_${tableId}_bill.pdf` });
    const [totalBill, setTotalBill] = useState(0);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchTotalBill = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/total-bill', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        table_id: tableId
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch total bill');
                }
                const data = await response.json();
                setTotalBill(data.total_bill);
                setOrders(data.orders);
            } catch (error) {
                console.error('Error fetching total bill:', error);
                // Handle error
            }
        };
        fetchTotalBill();
    }, [tableId]);



    return (
        <>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto" ref={targetRef}>

                <div className="flex justify-start item-start space-y-2 flex-col ">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Table #{tableId}</h1>
                    <p className="text-base font-medium leading-6 text-gray-600">Apr 18, 2024</p>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Order</p>
                            {orders.map(order => (
                                <div key={order.order_id} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block" src="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png" alt="dress" />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{order.product_name}</h3>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                ${order.price}
                                            </p>
                                            <p className="text-base xl:text-lg leading-6 text-gray-800">{order.quantity}</p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${order.total}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600">${totalBill}</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 text-gray-800">
                                            Discount
                                        </p>
                                        <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600">${totalBill}</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div className="w-8 h-8">
                                            <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 font-semibold text-gray-800">
                                                Pay Bill
                                                <br />
                                                <span className="font-normal" >Pay</span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <button onClick={() => toPDF()} className="hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 py-5 w-96 md:w-full bg-orange-800 text-base font-medium leading-4 text-white">Pay Bill</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;

import React from 'react';

const OrderCard = (props) => {
    const updateOrderStatus = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/update-order-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ order_id: props.order.order_id })
            });

            // Check if request was successful
            if (response.ok) {
                // Update the UI or perform any additional actions upon successful update
                console.log('Order status updated successfully');
                props.fetchOrders()
            } else {
                // Handle error
                console.error('Failed to update order status');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
            // Handle error, show a message to the user, etc.
        }
    };

    return (
        <>
            <div class="w-80 h-full  relative">
                <div class="pb-24 bg-white py-4 px-4 border-8 border-orange-600 rounded-3xl h-full shadow-2xl ">
                    <img src={`https://source.unsplash.com/400x300/?${props.order.product_name}`} alt=""
                        class="w-64 h-64 " />

                    <div class="flex justify-between">
                        <div class="py-4 flex space-x-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            <p class="text-xl font-semibold">{props.order.product_name}</p>
                        </div>
                        <div class="py-4 pr-5 flex justify-center flex-col">
                            <p class="text-lg font-semibold text-gray-400">Quantity</p>
                            <p class="text-xl font-semibold flex justify-center">{props.order.quantity}</p>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-0 left-0 ">
                    <div class="flex justify-between">
                        <div class="bg-orange-600 py-4 px-6 rounded-lg w-full ">
                            <p class="text-white text-lg font-semibold pb-4">
                                Table No
                            </p>
                            <div class="flex space-x-2 justify-center">
                                <p className="text-2xl text-white font-bold">{props.order.table_id}</p>
                            </div>
                        </div>
                        <div class="py-4 px-6 rounded-lg w-full flex items-end">
                            <button
                                onClick={updateOrderStatus}
                                class="bg-gradient-to-b from-blue-400 to-blue-500 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                                Waiting
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCard;

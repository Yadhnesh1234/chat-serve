import OrderCard from "../../../components/ordercard";
import { useEffect, useState } from "react";

const CookDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
    console.log(orders)
  }, []);
  useEffect(() => {
    
  }, [orders]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/get-orders");
      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await response.json();
      setOrders(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex py-2 rounded-md bg-white justify-start shadow-[0px_4px_11px_4px_#00000024] w-[96%] m-12">
          <div style={{ fontFamily: "'Open Sans', sans-serif" }} className="mr-10 p-4 w-full flex">
            <h1 className="text-2xl font-bold text-primary">Current Orders</h1>
            <p className="text-rose-500 ml-4 text-xl">({orders.length})</p>
          </div>
        </div>
        {loading ? (
          <div className="text-center mt-4">Loading...</div>
        ) : (
          <div className="w-full h-full flex flex-wrap justify-center items-center mb-10 overflow-y-auto">
            {orders.map((order) => (
              <div key={order.order_id} className="m-10">
                <OrderCard order={order} fetchOrders={fetchOrders}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CookDashboard;

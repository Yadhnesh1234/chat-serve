import { useState, useEffect } from "react";

const MenuCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // Handle error
            }
        };
        fetchProducts();
    }, []);

    return (
        <div style={{ backgroundColor: "#F1F1F1" }} className="flex h-screen">
            <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Image</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {products.map(product => (
                                    <tr key={product.product_id} className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold text-black text-xl">{product.product_name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border flex justify-center items-center">
                                            <img src={`https://source.unsplash.com/400x300/?${product.product_name}`} alt={product.product_name} />
                                        </td>
                                        <td className="px-4 py-3 text-sm border">{product.price}</td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm cursor-pointer"> Delete </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MenuCard;

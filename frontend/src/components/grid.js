import { useState, useEffect } from "react";

const Grid = () => {
    const [cooks, setCooks] = useState([]);

    useEffect(() => {
        const fetchCooks = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/cooks');
                if (!response.ok) {
                    throw new Error('Failed to fetch cooks');
                }
                const data = await response.json();
                setCooks(data);
            } catch (error) {
                console.error('Error fetching cooks:', error);
                // Handle error
            }
        };
        fetchCooks();
    }, []);

    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {cooks.map(cook => (
                                <tr key={cook.cook_id} className="text-gray-700">
                                    <td className="px-4 py-3 border">
                                        <div className="flex items-center text-sm">
                                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-black">{cook.cook_name}</p>
                                                <p className="text-xs text-gray-600">Cook</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-xs border">
                                        <span className={`px-2 py-1 font-semibold leading-tight ${cook.status ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'} rounded-sm`}>{cook.status ? 'Available' : 'Unavailable'}</span>
                                    </td>
                                    <td className="px-4 py-3 text-sm border">{cook.cook_email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Grid;

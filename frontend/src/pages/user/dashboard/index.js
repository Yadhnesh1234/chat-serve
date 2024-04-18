import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();
    const { tableId } = useParams(); 
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdateTableStatus = async () => {
        setIsLoading(true);
        console.log(tableId)
        try {
            const response = await fetch('http://localhost:5000/api/v1/update-table-status', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    table_id: tableId
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update table status');
            }
           navigate(`/user-home/${tableId}/cart`);
        } catch (error) {
            console.error('Error updating table status:', error);
            // Handle error
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center flex-col items-center h-screen w-screen">
            <iframe title="Chat-Serve" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/b493af1b-334a-4416-b628-adc497f7eb2a"></iframe>
            <button
                onClick={handleUpdateTableStatus}
                disabled={isLoading}
                className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-6 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isLoading ? 'Loading...' : 'End Session'}
            </button>
        </div>
    );
}

export default UserDashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getUserIdByUsername } from "../AdditionalFunc";  // Предположим, что это асинхронная функция

// Интерфейс для клиента
interface ClientData {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
}

function ClientPageComponent() {
    const [clients, setClients] = useState<ClientData[]>([]);
    const [userId, setUserId] = useState<number | null>(null);  // Состояние для хранения userId
    const navigate = useNavigate();

    useEffect(() => {
        // Загрузка userId только при монтировании компонента
        const fetchUserId = async () => {
            const id = await getUserIdByUsername();  // Получение userId асинхронно
            setUserId(id);  // Устанавливаем полученный userId в состояние
        };

        fetchUserId();
    }, []);  // useEffect вызывается только при монтировании компонента

    useEffect(() => {
        if (userId !== null) {
            // Загрузка списка клиентов только когда userId получен
            axios.get(`http://localhost:8080/api/users/${userId}/clients`)
                .then((response) => setClients(response.data))  // axios сразу парсит JSON
                .catch((error) => console.error("Some errors happened here:", error));
        }
    }, [userId]);  // Эффект сработает, когда userId изменится

    const handleDelete = (clientId: number) => {
        axios.delete(`http://localhost:8080/api/users/${userId}/clients/${clientId}`)
            .then(() => {
                // Фильтруем список, убирая удаленного клиента
                setClients(prevClients => prevClients.filter(client => client.id !== clientId));
            })
            .catch(error => console.error("Some errors happened here:", error));
    };

    console.log(userId);

    return (
        <div className="h-screen bg-gray-900 flex flex-col text-white">
            {/* Заголовок */}
            <header className="h-[100px] bg-gray-800 flex justify-center items-center shadow-lg px-8">
                <h1 className="text-4xl font-semibold">Client Management</h1>
            </header>

            {/* Панель управления */}
            <div className="h-[100px] bg-gray-700 flex justify-between items-center px-8 py-4 rounded-lg shadow-md mx-4 mt-4">
                <Link to="add">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-6 py-2 shadow-md transition">
                        + Add Client
                    </button>
                </Link>
                <div className="flex items-center space-x-2">
                    <input 
                        type="text" 
                        className="bg-gray-600 text-white placeholder-gray-400 px-4 py-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                        placeholder="Search clients..."
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow-md transition">
                        Search
                    </button>
                </div>
            </div>

            {/* Контент */}
            <main className="flex-1 bg-gray-800 p-8 rounded-lg shadow-md mx-4 mt-4 overflow-auto">
                <h2 className="text-2xl mb-4">Clients</h2>
                {clients.length > 0 ? (
                    <div className="bg-gray-700 p-4 rounded-lg">
                       {clients.map((client) => (
                            <div key={client.id} className="border-b border-gray-600 pb-2 mb-2 flex items-center">
                                <div className="flex-1">
                                    <p><strong>Name:</strong> {client.name}</p>
                                    <p><strong>Email:</strong> {client.email}</p>
                                    <p><strong>Phone:</strong> {client.phoneNumber}</p>
                                </div>
                                {/* Кнопки справа */}
                                <div className="flex space-x-2 justify-end">
                                    <button 
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-1 rounded-lg transition"
                                        onClick={() => navigate("moreInfo", { state: { clientId: client.id} })}
                                    >
                                        More info
                                    </button>
                                    <button 
                                        className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-1 rounded-lg transition"
                                        onClick={() => handleDelete(client.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No clients found...</p>
                )}
            </main>
        </div>
    );
}

export default ClientPageComponent;
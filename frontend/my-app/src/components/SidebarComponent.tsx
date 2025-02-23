import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SidebarComponent() {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    // Функция для перехода на /dashboard/clients
    const handleClientsClick = () => {
        navigate("/dashboard/clients");
    };

    return (
        <div className="bg-gray-800 w-80">
            <div className={`bg-gray-900 text-white ${isOpen ? "w-80" : "w-20"} w-full h-[629px] p-5 transition-all rounded-md mt-[100px]`}>
                {/* Кнопка для скрытия/открытия */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mb-5 p-2 bg-gray-700 rounded-lg w-full text-center"
                >
                    {isOpen ? "⏪" : "⏩"}
                </button>

                {/* Меню */}
                <nav className="space-y-4">
                    {/* Кнопка для перехода к клиентам */}
                    <button onClick={handleClientsClick} className="block p-3 rounded-lg hover:bg-gray-700 w-full">
                        {isOpen ? "👤 Клиенты" : "👤"}
                    </button>

                    <Link to="orders" className="block p-3 rounded-lg hover:bg-gray-700">
                        {isOpen ? "📦 Заказы" : "📦"}
                    </Link>
                    <Link to="/settings" className="block p-3 rounded-lg hover:bg-gray-700">
                        {isOpen ? "⚙ Настройки" : "⚙"}
                    </Link>
                    <button className="block p-3 rounded-lg hover:bg-red-700 w-full text-left">
                        {isOpen ? "🚪 Выйти" : "🚪"}
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default SidebarComponent;
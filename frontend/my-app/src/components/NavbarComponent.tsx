import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
    // Указываем тип состояния как string | null
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("username");
        if (user) {
            setUsername(user);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        setUsername(null);
    };

    return (
        <nav className="bg-gray-900 text-white p-5 flex justify-between items-center shadow-lg">
            <div className="text-2xl font-bold">
                <Link to="/">FreelanceCRM</Link>
            </div>

            <ul className="hidden md:flex space-x-6">
                <li>
                    <a href="#features" className="hover:text-gray-300 transition">
                        Возможности
                    </a>
                </li>
                <li>
                    <a href="#benefits" className="hover:text-gray-300 transition">
                        Преимущества
                    </a>
                </li>
                <li>
                    <a href="#testimonials" className="hover:text-gray-300 transition">
                        Отзывы
                    </a>
                </li>
            </ul>

            <div className="flex space-x-4">
                {username ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-white">Hello, {username}!</span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
                        >
                            Выйти
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
                                Войти
                            </button>
                        </Link>
                        <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition">
                            Зарегистрироваться
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavbarComponent;
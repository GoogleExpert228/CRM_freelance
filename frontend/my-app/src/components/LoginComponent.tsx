import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<String>("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/users/login",
                null,
                {
                    params: { username, password },
                    withCredentials: true,
                }
            );
    
            if (response.status === 200) {
                // Сохраняем имя пользователя в localStorage
                localStorage.setItem("username", username);
                setUsername(username);  // Обновляем состояние
                navigate("/dashboard"); // Перенаправляем на страницу личного кабинета
            }
        } catch (err) {
            
        }
    };

    return (
        <div className="bg-gray-800 h-screen flex justify-center items-center">
            <div className="bg-gray-900 h-[450px] w-[400px] rounded-lg shadow-lg flex flex-col items-center p-8">
                <h1 className="text-white text-3xl mb-6">Log-in!</h1>

                {/* Поля ввода */}
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-6 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Кнопка логина */}
                <button
                    onClick={handleLogin}
                    className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                >
                    Log-in
                </button>

                {/* Ссылки */}
                <div className="w-full flex justify-between text-sm text-gray-400">
                    <a href="#" className="hover:text-blue-500">Forgot password?</a>
                    <a href="#" className="hover:text-blue-500">Don't have an account?</a>
                </div>

                {/* Ошибки */}
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
            </div>
        </div>
    );
}

export default LoginComponent;
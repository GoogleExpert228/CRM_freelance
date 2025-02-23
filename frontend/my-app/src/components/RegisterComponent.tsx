import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterComponnet() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("The passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:8080/api/users", {
                username: formData.username,
                email: formData.email,
                passwordHash: formData.password,
            });

            navigate("/login"); // Перенаправление на страницу входа после успешной регистрации
        } catch (err) {
            setError("Registration error, user may already exist");
        }
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-white text-2xl font-bold text-center mb-4">Регистрация</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="p-3 rounded bg-gray-700 text-white focus:outline-none"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-gray-700 text-white focus:outline-none"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-3 rounded bg-gray-700 text-white focus:outline-none"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="p-3 rounded bg-gray-700 text-white focus:outline-none"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded transition"
                    >
                        Зарегистрироваться
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-4">
                    Уже есть аккаунт?{" "}
                    <a href="/login" className="text-green-400 hover:underline">
                        Войти
                    </a>
                </p>
            </div>
        </div>
    );
}

export default RegisterComponnet;
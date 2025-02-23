import { useState } from "react";
import { getUserIdByUsername } from "../AdditionalFunc";
import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

function AddClientComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !phoneNumber) {
            alert("Please fill in all fields!");
            return;
        }

        setLoading(true); // Показываем индикатор загрузки

        try {
            const userId = await getUserIdByUsername(); // Ждём, пока получим userId

            if (!userId) {
                console.error("No user ID found.");
                alert("Error: No user ID found!");
                return;
            }

            const clientData = { name, email, phoneNumber };
            const response = await axios.post(`${API_URL}/${userId}/clients`, clientData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Client added:", response.data);
            alert("Client added successfully!");

            // Очистка полей формы
            setName("");
            setEmail("");
            setPhoneNumber("");
        } catch (error) {
            console.error("Error adding client:", error);
            alert("Failed to add client. Please try again.");
        } finally {
            setLoading(false); // Отключаем индикатор загрузки
        }
    };

    return (
        <div className="h-screen bg-gray-900 flex flex-col text-white">
            {/* Header */}
            <header className="h-[100px] bg-gray-800 flex justify-center items-center shadow-lg px-8">
                <h1 className="text-4xl font-semibold">Add New Client</h1>
            </header>

            {/* Content */}
            <main className="flex-1 bg-gray-800 p-8 rounded-lg shadow-md mx-4 mt-6 overflow-auto flex justify-center items-center">
                <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">Enter Client Details</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter client name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter client email"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                placeholder="Enter client phone number"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                disabled={loading}
                            >
                                {loading ? "Adding..." : "Add Client"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AddClientComponent;
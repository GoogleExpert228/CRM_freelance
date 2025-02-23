import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const getUserIdByUsername = async (): Promise<number | null> => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");

    if (userId) {
        console.log("Returning cached userId:", userId);
        return parseInt(userId, 10); // Если уже есть, возвращаем
    }

    if (!username) {
        console.error("Username not found in localStorage");
        return null;
    }

    try {
        console.log("Fetching userId for username:", username);
        const response = await axios.get<number>(`${API_URL}/username/${username}`);
        console.log("Fetched userId from API:", response.data);

        localStorage.setItem("userId", response.data.toString());
        console.log("Saving userId in localStorage:", response.data);

        return response.data; // Возвращаем userId
    } catch (error) {
        console.error("Cannot find userId:", error);
        return null;
    }
};
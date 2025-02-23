import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getUserIdByUsername } from "../AdditionalFunc";

function MoreInfoClientComponent() {
    const [client, setClient] = useState<Client | null>(null);
    const [notes, setNotes] = useState<ClientNote[]>([]);
    const [tasks, setTasks] = useState<string[]>([]);
    const [newNote, setNewNote] = useState(""); // Only store content (string)
    const [newTask, setNewTask] = useState("");
    const [userId, setUserId] = useState<number | null>(null); // Add state for userId

    const location = useLocation();

    interface Client {
        id: number;
        name: string;
        email: string;
        phoneNumber: string;
    }

    interface ClientNote {
        id: number;
        content: string;
    }

    // Fetch userId asynchronously
    useEffect(() => {
        const fetchUserId = async () => {
            const id = await getUserIdByUsername();
            setUserId(id); // Store userId in state
        };

        fetchUserId();
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    useEffect(() => {
        console.log("userId:", userId);
        console.log("clientId from location.state:", location.state?.clientId);
    
        if (userId !== null && location.state?.clientId) {
            axios.get(`http://localhost:8080/api/users/${userId}/clients/${location.state.clientId}/notes`)
                .then(response => setNotes(response.data))
                .catch(error => console.log("Failed to load notes:", error));
    
            axios.get(`http://localhost:8080/api/users/${userId}/clients/${location.state.clientId}`)
                .then(response => setClient(response.data))
                .catch(error => console.log("Failed to load client:", error));
        }
    }, [userId, location.state?.clientId]);
 
    const addNote = () => {
        if (newNote.trim() && userId !== null && location.state?.clientId) {
            axios.post(`http://localhost:8080/api/users/${userId}/clients/${location.state.clientId}/notes`, { content: newNote })
                .then(response => {
                    setNotes([...notes, response.data]); // Add new note to state
                    setNewNote(""); // Clear the input field
                })
                .catch(error => console.error("Failed to add note:", error));
        }
    };
    
    const handleNewNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(e.target.value); // Update newNote with the input value
    };

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    return (
        <div className="h-screen bg-gray-900 flex flex-col text-white">
            {/* Header */}
            <header className="h-[100px] bg-gray-800 flex justify-center items-center shadow-lg px-8">
                <h1 className="text-4xl font-semibold">Client Details</h1>
            </header>

            {/* Content */}
            <main className="flex-1 bg-gray-800 p-8 rounded-lg shadow-md mx-4 mt-6 overflow-auto flex flex-col space-y-6">
                {/* Client Info Section */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">Client Information</h2>
                    <div className="space-y-2">
                        <p><strong>Name:</strong> {client?.name}</p>
                        <p><strong>Email:</strong> {client?.email}</p>
                        <p><strong>Phone:</strong> {client?.phoneNumber}</p>
                    </div>
                </section>

                {/* Notes Section */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">Notes 📝</h2>
                    <div className="space-y-2">
                        {notes.length > 0 ? (
                            notes.map((note, index) => (
                                <p key={index} className="bg-gray-600 p-3 rounded-lg">{note.content}</p>
                            ))
                        ) : (
                            <p className="text-gray-400">No notes yet...</p>
                        )}
                    </div>
                    {/* Add Note Input */}
                    <div className="mt-4 flex space-x-2">
                        <input 
                            type="text"
                            className="bg-gray-600 text-white placeholder-gray-400 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Write a new note..."
                            value={newNote || ""}  // Ensure this is either the content or an empty string
                            onChange={handleNewNoteChange}  // Updated event handler
                        />
                        <button 
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition"
                            onClick={addNote}
                        >
                            Add
                        </button>
                    </div>
                </section>

                {/* Tasks Section */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl mb-4">Tasks ✅</h2>
                    <div className="space-y-2">
                        {tasks.length > 0 ? (
                            tasks.map((task, index) => (
                                <p key={index} className="bg-gray-600 p-3 rounded-lg">{task}</p>
                            ))
                        ) : (
                            <p className="text-gray-400">No tasks yet...</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default MoreInfoClientComponent;
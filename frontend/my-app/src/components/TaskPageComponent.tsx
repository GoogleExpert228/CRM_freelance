
function TaskPageComponent() {

    return (
        <div className="h-screen bg-gray-900 flex flex-col text-white">
            {/* Header */}
            <header className="h-[100px] bg-gray-800 flex justify-center items-center shadow-lg px-8">
                <h1 className="text-4xl font-semibold">Here all tasks!</h1>
            </header>

            {/* Content */}
            <main className="flex-1 bg-gray-800 p-8 rounded-lg shadow-md mx-4 mt-6 overflow-auto flex justify-center items-center">
               
            </main>
        </div>
    );
}

export default TaskPageComponent;
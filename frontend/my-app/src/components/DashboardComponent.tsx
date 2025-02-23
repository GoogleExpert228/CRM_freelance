import SidebarComponent from "./SidebarComponent";

function DashboardComponent() {
    return (
        <div className="bg-gray-800 h-screen flex">
            <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-white text-4xl font-bold mb-4">Hello, world!</h1>
                <p className="text-white text-lg">Here will be all content!</p>
            </main>
        </div>
    );
}

export default DashboardComponent;
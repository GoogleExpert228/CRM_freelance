function FeaturesComponent() {
    return (
        <section className="bg-gray-950 py-20 px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Текстовый блок */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-white">Полный контроль над фрилансом</h2>
                    <p className="text-lg text-gray-300 mt-4">
                        Управляйте клиентами, следите за заказами, контролируйте доходы — всё в одном месте.
                        Никаких сложностей: интерфейс интуитивно понятен, а функционал охватывает всё, что нужно фрилансеру.
                    </p>

                    {/* Список ключевых функций */}
                    <ul className="mt-6 space-y-4 text-gray-300">
                        <li className="flex items-center">
                            <span className="text-green-500 text-xl mr-3">✔</span> Ведение базы клиентов и заказов
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 text-xl mr-3">✔</span> Контроль этапов выполнения проектов
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 text-xl mr-3">✔</span> Гибкое управление задачами
                        </li>
                        <li className="flex items-center">
                            <span className="text-green-500 text-xl mr-3">✔</span> Учёт доходов и статистика по заказам
                        </li>
                    </ul>
                </div>

                {/* Блок с изображением */}
                <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img 
                        src="https://source.unsplash.com/600x400/?technology,workspace" 
                        alt="Пример CRM-интерфейса" 
                        className="rounded-lg shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default FeaturesComponent;
function BenefitsComponent() {
    return (
        <section className="bg-gray-900 text-white py-20 px-6" id="benefits">
            <div className="max-w-5xl mx-auto">
                {/* Заголовок */}
                <h2 className="text-4xl font-extrabold text-center">Что дает CRM фрилансеру?</h2>

                {/* Гибкая сетка преимуществ */}
                <div className="mt-16 grid md:grid-cols-2 gap-12">
                    <div className="relative bg-gray-700 p-8 rounded-lg shadow-lg">
                        <span className="absolute top-[-15px] left-4 text-4xl text-green-500">⚡</span>
                        <h3 className="text-2xl font-semibold">Больше времени на работу</h3>
                        <p className="mt-3 text-gray-300">
                            Уменьшите рутину и освободите часы для реальных задач — CRM автоматизирует часть процессов.
                        </p>
                    </div>

                    <div className="relative bg-gray-700 p-8 rounded-lg shadow-lg">
                        <span className="absolute top-[-15px] left-4 text-4xl text-green-500">📌</span>
                        <h3 className="text-2xl font-semibold">Никакой путаницы с клиентами</h3>
                        <p className="mt-3 text-gray-300">
                            Все контакты, заказы и заметки в одном месте — ничего не потеряется.
                        </p>
                    </div>

                    <div className="relative bg-gray-700 p-8 rounded-lg shadow-lg">
                        <span className="absolute top-[-15px] left-4 text-4xl text-green-500">📊</span>
                        <h3 className="text-2xl font-semibold">Простая аналитика</h3>
                        <p className="mt-3 text-gray-300">
                            CRM показывает доходы, расходы и помогает планировать финансы без сложных таблиц.
                        </p>
                    </div>

                    <div className="relative bg-gray-700 p-8 rounded-lg shadow-lg">
                        <span className="absolute top-[-15px] left-4 text-4xl text-green-500">🚀</span>
                        <h3 className="text-2xl font-semibold">Уверенность в завтрашнем дне</h3>
                        <p className="mt-3 text-gray-300">
                            Организованная работа = стабильный рост. Управляйте проектами как профессионал.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BenefitsComponent;
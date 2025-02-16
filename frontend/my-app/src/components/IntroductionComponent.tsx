function IntroductionComponent() {
    return (
        <section className="bg-gray-800 py-20 px-6 text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-5xl font-extrabold">Что такое CRM для фрилансера?</h2>
                <p className="text-xl mt-6 leading-relaxed">
                    FreelanceCRM — это удобный инструмент для фрилансеров, который помогает систематизировать клиентов, 
                    отслеживать заказы и эффективно управлять рабочим процессом. Забудьте о хаосе в таблицах и заметках — все данные в одном месте.
                </p>
            </div>

            {/* Основные преимущества */}
            <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
                <div className="p-8 bg-gray-800 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-green-500">📝 Управление заказами</h3>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Следите за текущими проектами, статусами задач и сроками выполнения.
                    </p>
                </div>
                <div className="p-8 bg-gray-800 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-green-500">📞 База клиентов</h3>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Храните контактные данные, историю взаимодействий и заметки о клиентах.
                    </p>
                </div>
                <div className="p-8 bg-gray-800 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-green-500">📊 Аналитика и отчёты</h3>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Получайте полезные данные о вашей работе и доходах.
                    </p>
                </div>
            </div>

            {/* Призыв к действию */}
            <div className="mt-20 text-center">
                <p className="text-xl text-gray-300 leading-relaxed">
                    Готовы организовать свою работу и повысить продуктивность? <br /> Попробуйте FreelanceCRM уже сегодня!
                </p>
                <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition">
                    Начать бесплатно
                </button>
            </div>
        </section>
    );
}

export default IntroductionComponent;

import { Plus } from 'lucide-react';

export default function MealPlan() {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const mealTypes = ['Desayuno', 'Comida', 'Cena'];

    return (
        <div className="pb-20 px-4 md:px-0 pt-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-sage-dark">Plan Semanal</h1>
                    <p className="text-gray-600">Organiza tus comidas para la semana.</p>
                </div>
                <button className="bg-sage text-white px-4 py-2 rounded-xl font-medium hover:bg-sage-dark transition-colors flex items-center gap-2">
                    <Plus size={20} />
                    Nuevo Plan
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {days.map((day) => (
                    <div key={day} className="flex flex-col gap-3">
                        <div className="text-center py-2 font-bold text-sage-dark bg-sage/10 rounded-lg">
                            {day}
                        </div>
                        {mealTypes.map((type) => (
                            <div key={`${day}-${type}`} className="bg-white p-3 rounded-xl border border-stone-200 min-h-[100px] flex flex-col justify-between group hover:border-sage/50 transition-colors cursor-pointer">
                                <span className="text-xs font-medium text-gray-400 uppercase">{type}</span>
                                <div className="flex items-center justify-center h-full">
                                    <button className="w-8 h-8 rounded-full bg-stone-50 text-gray-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-stone-100">
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

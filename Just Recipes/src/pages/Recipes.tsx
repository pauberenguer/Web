import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import RecipeCard from '../components/ui/RecipeCard';
import { recipes, categories } from '../data/mockData';

export default function Recipes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pb-20 px-4 md:px-0 pt-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-sage-dark mb-4">Explora nuestras recetas</h1>
                <p className="text-gray-600 mb-6">Encuentra el plato perfecto para cualquier ocasión.</p>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Buscar recetas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage/50 bg-white"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-200 rounded-xl text-gray-700 hover:bg-stone-50 font-medium">
                        <Filter size={20} />
                        Filtros
                    </button>
                </div>

                {/* Category Chips */}
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === null
                            ? 'bg-sage text-white'
                            : 'bg-white border border-stone-200 text-gray-600 hover:bg-stone-50'
                            }`}
                    >
                        Todas
                    </button>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category.name
                                ? 'bg-sage text-white'
                                : 'bg-white border border-stone-200 text-gray-600 hover:bg-stone-50'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            {filteredRecipes.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No se encontraron recetas que coincidan con tu búsqueda.</p>
                </div>
            )}
        </div>
    );
}

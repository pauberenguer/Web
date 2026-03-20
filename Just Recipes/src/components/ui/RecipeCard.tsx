import { Clock, Flame, ChefHat } from 'lucide-react';
import type { Recipe } from '../../data/mockData';

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 group cursor-pointer">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-sage-dark shadow-sm">
                    {recipe.category}
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{recipe.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{recipe.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-terracotta" />
                        <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Flame size={16} className="text-terracotta" />
                        <span>{recipe.calories} kcal</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ChefHat size={16} className="text-terracotta" />
                        <span>{recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

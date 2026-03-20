import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/ui/RecipeCard';
import CategoryCard from '../components/ui/CategoryCard';
import { recipes, categories } from '../data/mockData';

export default function Home() {
    const featuredRecipes = recipes.slice(0, 3);

    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative bg-sage-dark rounded-3xl overflow-hidden mx-4 mt-4 md:mx-0 md:mt-8 p-8 md:p-12 text-white">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Descubre el placer de <span className="text-sage-light">cocinar en casa</span>
                    </h1>
                    <p className="text-sage-light/90 text-lg mb-8 max-w-lg">
                        Encuentra inspiración diaria con nuestras recetas seleccionadas por chefs expertos y nuestra comunidad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/recipes"
                            className="bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Explorar Recetas <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/chef"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Preguntar al Chef
                        </Link>
                    </div>
                </div>

                {/* Decorative background pattern or image could go here */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.3C22.5,65.2,9.8,70.5,-1.9,73.8C-13.6,77.1,-24.3,78.4,-34.4,73.8C-44.5,69.2,-54,58.7,-62.3,47.5C-70.6,36.3,-77.7,24.4,-79.6,11.7C-81.5,-1,-78.2,-14.5,-70.8,-26.1C-63.4,-37.7,-51.9,-47.4,-39.9,-55.3C-27.9,-63.2,-15.4,-69.3,-1.2,-67.2C13,-65.1,26,-54.8,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </section>

            {/* Categories Section */}
            <section className="mt-12 px-4 md:px-0">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-sage-dark">Categorías Populares</h2>
                    <Link to="/recipes" className="text-terracotta font-medium hover:underline">Ver todas</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </section>

            {/* Featured Recipes Section */}
            <section className="mt-12 px-4 md:px-0">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-sage-dark">Recetas Destacadas</h2>
                    <Link to="/recipes" className="text-terracotta font-medium hover:underline">Ver todas</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredRecipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </section>
        </div>
    );
}

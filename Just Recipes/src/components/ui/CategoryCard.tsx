import type { Category } from '../../data/mockData';

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
    return (
        <div className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
            <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
            </div>
        </div>
    );
}

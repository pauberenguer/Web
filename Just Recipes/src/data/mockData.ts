export interface Recipe {
    id: string;
    title: string;
    image: string;
    time: string;
    difficulty: 'Fácil' | 'Medio' | 'Difícil';
    calories: number;
    category: string;
    description: string;
}

export interface Category {
    id: string;
    name: string;
    image: string;
}

export const categories: Category[] = [
    {
        id: '1',
        name: 'Desayunos',
        image: 'https://images.unsplash.com/photo-1533089862017-5614ec87e284?auto=format&fit=crop&w=500&q=60',
    },
    {
        id: '2',
        name: 'Saludable',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=60',
    },
    {
        id: '3',
        name: 'Pasta',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=60',
    },
    {
        id: '4',
        name: 'Postres',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=500&q=60',
    },
];

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Tostadas de Aguacate y Huevo',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=500&q=60',
        time: '15 min',
        difficulty: 'Fácil',
        calories: 320,
        category: 'Desayunos',
        description: 'Un desayuno clásico, nutritivo y delicioso para empezar el día con energía.',
    },
    {
        id: '2',
        title: 'Ensalada César con Pollo',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=60',
        time: '25 min',
        difficulty: 'Fácil',
        calories: 450,
        category: 'Saludable',
        description: 'Fresca, crujiente y llena de sabor. La ensalada perfecta para una comida ligera.',
    },
    {
        id: '3',
        title: 'Pasta Carbonara Auténtica',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=500&q=60',
        time: '30 min',
        difficulty: 'Medio',
        calories: 650,
        category: 'Pasta',
        description: 'La receta tradicional italiana, cremosa sin nata y llena de sabor.',
    },
    {
        id: '4',
        title: 'Tarta de Queso y Frutos Rojos',
        image: 'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?auto=format&fit=crop&w=500&q=60',
        time: '60 min',
        difficulty: 'Medio',
        calories: 550,
        category: 'Postres',
        description: 'Suave, cremosa y con el toque ácido perfecto de los frutos rojos.',
    },
];

import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, UtensilsCrossed, Calendar, ChefHat, User, Menu } from 'lucide-react';
import { clsx } from 'clsx';

export default function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Inicio', icon: Home },
        { path: '/recipes', label: 'Recetas', icon: UtensilsCrossed },
        { path: '/plan', label: 'Plan Semanal', icon: Calendar },
        { path: '/chef', label: 'Chef', icon: ChefHat },
        { path: '/profile', label: 'Perfil', icon: User },
    ];

    return (
        <div className="flex min-h-screen bg-cream">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-stone-200 fixed h-full z-10">
                <div className="p-6 border-b border-stone-100">
                    <h1 className="text-2xl font-bold text-sage-dark">Just Recipes</h1>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                clsx(
                                    'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium',
                                    isActive
                                        ? 'bg-sage/10 text-sage-dark'
                                        : 'text-gray-500 hover:bg-stone-50 hover:text-gray-900'
                                )
                            }
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-stone-200 z-20 px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold text-sage-dark">Just Recipes</h1>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-gray-600 hover:bg-stone-50 rounded-lg"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-30 bg-black/20" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl p-4" onClick={e => e.stopPropagation()}>
                        <nav className="space-y-1 mt-12">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        clsx(
                                            'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium',
                                            isActive
                                                ? 'bg-sage/10 text-sage-dark'
                                                : 'text-gray-500 hover:bg-stone-50 hover:text-gray-900'
                                        )
                                    }
                                >
                                    <item.icon size={20} />
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 md:ml-64 pt-16 md:pt-0">
                <div className="max-w-5xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

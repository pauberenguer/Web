
import { User, Settings, Heart, LogOut } from 'lucide-react';

export default function Profile() {
    return (
        <div className="pb-20 px-4 md:px-0 pt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center mb-8">
                <div className="w-24 h-24 bg-sage/20 rounded-full mx-auto flex items-center justify-center text-sage-dark mb-4">
                    <User size={40} />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Usuario Invitado</h1>
                <p className="text-gray-500">Amante de la cocina</p>
            </div>

            <div className="space-y-4">
                <button className="w-full bg-white p-4 rounded-2xl border border-stone-100 flex items-center gap-4 hover:border-sage/50 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-colors">
                        <Heart size={20} />
                    </div>
                    <span className="font-medium text-gray-700 flex-1 text-left">Mis Favoritos</span>
                </button>

                <button className="w-full bg-white p-4 rounded-2xl border border-stone-100 flex items-center gap-4 hover:border-sage/50 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-sage/10 text-sage-dark flex items-center justify-center group-hover:bg-sage group-hover:text-white transition-colors">
                        <Settings size={20} />
                    </div>
                    <span className="font-medium text-gray-700 flex-1 text-left">Configuración</span>
                </button>

                <button className="w-full bg-white p-4 rounded-2xl border border-stone-100 flex items-center gap-4 hover:border-red-200 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <LogOut size={20} />
                    </div>
                    <span className="font-medium text-gray-700 flex-1 text-left">Cerrar Sesión</span>
                </button>
            </div>
        </div>
    );
}

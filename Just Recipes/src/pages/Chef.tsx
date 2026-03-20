import { useState, useRef, useEffect } from 'react';
import { Send, ChefHat, User } from 'lucide-react';
import { clsx } from 'clsx';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

export default function Chef() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: '¡Hola! Soy tu Chef Virtual. ¿Qué tienes en la nevera o qué te apetece cocinar hoy?',
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://pauberenguerdev.app.n8n.cloud/webhook-test/just_recipes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: currentInput }),
            });

            if (!response.ok) {
                throw new Error('Error al comunicarse con el chef');
            }

            const data = await response.json();

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.output || 'Lo siento, no pude procesar tu mensaje.',
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, inténtalo de nuevo.',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-4rem)] flex flex-col pt-4 md:pt-0">
            <div className="flex-1 overflow-y-auto px-4 md:px-0 pb-4 space-y-6">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={clsx(
                            'flex gap-4 max-w-3xl mx-auto',
                            message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        )}
                    >
                        <div
                            className={clsx(
                                'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                                message.role === 'assistant' ? 'bg-sage text-white' : 'bg-terracotta text-white'
                            )}
                        >
                            {message.role === 'assistant' ? <ChefHat size={20} /> : <User size={20} />}
                        </div>
                        <div
                            className={clsx(
                                'p-4 rounded-2xl max-w-[80%]',
                                message.role === 'assistant'
                                    ? 'bg-white border border-stone-200 text-gray-800 rounded-tl-none'
                                    : 'bg-sage text-white rounded-tr-none'
                            )}
                        >
                            <p className="leading-relaxed">{message.content}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-stone-200 md:bg-transparent md:border-none max-w-3xl mx-auto w-full">
                <form onSubmit={handleSend} className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                        className="w-full pl-6 pr-14 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-sage/50 shadow-sm"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-sage text-white rounded-xl hover:bg-sage-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <Send size={20} />
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

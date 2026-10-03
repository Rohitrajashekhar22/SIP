import { useEffect, useRef, useState } from "react";
import { sendMessage } from "../api/aiApi";

function AIMentor() {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hi! I'm your CS & Software Engineering mentor. Ask me anything about programming, algorithms, system design, or tech careers!",
        },
    ]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput("");

        const updatedMessages = [
            ...messages,
            { role: "user", content: userMessage },
        ];

        setMessages(updatedMessages);
        setIsLoading(true);

        try {
            const response = await sendMessage(
                updatedMessages.map((msg) => ({
                    role: msg.role,
                    content: msg.content,
                }))
            );

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: response },
            ]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I encountered an error. Please try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 shadow-lg">
                <h1 className="text-2xl font-bold text-white">AI Mentor</h1>
                <p className="text-blue-100 text-sm mt-1">
                    Your CS & Software Engineering guide
                </p>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                                message.role === "user"
                                    ? "bg-blue-600 text-white rounded-br-none"
                                    : "bg-slate-800 text-slate-100 rounded-bl-none"
                            }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                {message.content}
                            </p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800 text-slate-100 px-4 py-3 rounded-2xl rounded-bl-none">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="bg-slate-800 border-t border-slate-700 px-6 py-4">
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me about CS or software engineering..."
                        disabled={isLoading}
                        className="flex-1 bg-slate-700 border border-slate-600 rounded-full px-4 py-2 text-white placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-6 py-2 rounded-full text-white font-semibold transition"
                    >
                        {isLoading ? "..." : "Send"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AIMentor;
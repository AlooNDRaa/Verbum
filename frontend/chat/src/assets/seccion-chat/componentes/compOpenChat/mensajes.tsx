import { useState, useEffect } from "react";
import io from "socket.io-client";

const Socket = io('/');

function Mensajes() {
    const [chat, setChat] = useState<string>("");
    const [chats, setChats] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setChats([...chats, chat]);
        Socket.emit("chat", chat);
    };

    useEffect(() => {
        Socket.on("chat", receiveChat);
        return () => {
            Socket.off("chat", receiveChat);
        };
    }, []);

    const receiveChat = (chat: string) => {
        setChats((state: string[]) => [...state, chat]);
    };

    return (
        <>
            <div className="w-full h-[90vh] bg-[#161616] opacity-90 flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit} className="absolute bottom-20 flex items-stretch" >
                    <input
                        type="text"
                        placeholder="Escribir"
                        onChange={(e) => setChat(e.target.value)}
                        className="bg-[#C83C83] border-stone-700  bg-stone-900 rounded-md w-full "
                    />
                    <button>Enviar</button>
                </form>
                <ul>
                    {chats.map((chat, i) => (
                        <li key={i} className="text-white">{chat}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Mensajes;


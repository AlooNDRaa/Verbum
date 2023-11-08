import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const Socket = io('/');

function Mensajes() {
    const [chat, setChat] = useState<string>("");
    const [chats, setChats] = useState<{ body: string; from: string }[]>([]); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newChat = {
            body: chat,
            from: "me",
        };
        setChats([...chats, newChat]);
        Socket.emit("chat", newChat); 
        setChat(""); 
    };

    useEffect(() => {
        Socket.on("chat", receiveChat);
        return () => {
            Socket.off("chat", receiveChat);
        };
    },);

    const receiveChat = (newChat: { body: string; from: string }) => {
        const remitente = newChat.from === "me" ? "Me" : newChat.from;
        newChat.from = remitente;
        setChats((state: { body: string; from: string }[]) => [...state, newChat]);        
    };
    

    return (
        <>
            <div className="w-full h-[90vh] bg-[#161616] opacity-90 flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit} className="absolute bottom-20 flex items-stretch">
                    <input
                        type="text"
                        placeholder="Escribir"
                        value={chat}
                        onChange={(e) => setChat(e.target.value)}
                        className="bg-[#C83C83] border-stone-700 bg-stone-900 rounded-md w-full"
                    />
                    <button type="submit">Enviar</button>
                </form>
                <ul>
                    {chats.map((chat, i) => (
                        <li className="text-white text-1xl my-2 p-2 table text-sm bg-[#C83C83] rounded-md " key={i}>
                            {`${chat.from}: ${chat.body}`}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Mensajes;

import React, { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import Navopen from "./navOpenChat";

const Socket = io('/');

interface MensajesProps {
    selectedUser: string;
    userId: number;
}

function Mensajes(props: MensajesProps) {
    const { selectedUser } = props;
    const [chat, setChat] = useState<string>("");
    const [chats, setChats] = useState<{
        receptor: string; body: string; from: string;
    }[]>([]);

    const displayedChats = chats.filter((chat) => chat.from === selectedUser || chat.from === "me");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (chat.trim() === "") {
            return;
        }

        const newChat = {
            body: chat,
            from: "me",
            receptor: selectedUser
        };

        Socket.emit("chat", chat);

        try {
            await fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message_content: chat,
                    user_id: selectedUser, 
                }),
            });
        } catch (error) {
            console.error('Error al guardar el mensaje en la base de datos:', error);
        }

        setChats([...chats, newChat]);
        setChat("");
    };

    const receiveChat = useCallback((newChat: { body: string; from: string }) => {
        const remitente = newChat.from === selectedUser ? "Me" : selectedUser;
        const receptor = newChat.from === selectedUser ? selectedUser : "Me";
        const updatedChat = { ...newChat, from: remitente, receptor: receptor };
        setChats((state: { body: string; from: string; receptor: string }[]) => [...state, updatedChat]);
    }, [selectedUser]);

    useEffect(() => {
        if (selectedUser) {
            Socket.on("chat", receiveChat);
            return () => {
                Socket.off("chat", receiveChat);
            };
        }
    }, [selectedUser, receiveChat]);

    return (
        <>
            <Navopen selectedUser={selectedUser} />
            <div className="w-full h-screen bg-[#161616] opacity-90 flex items-center justify-center pb-[48px]">
                <form onSubmit={handleSubmit} className="absolute bottom-0 flex items-stretch w-fit p-2 ">
                    <input
                        type="text"
                        placeholder="Escribir"
                        value={chat}
                        onChange={(e) => setChat(e.target.value)}
                        className="text-white bg-[#ec4899] border-stone-700 bg-stone-900 rounded-md flex-auto h-[50px]"
                    />
                    <button type="submit" className="text-[#fdf4ff]">Enviar</button>
                </form>
                <ul className="overflow-y-scroll w-[70rem]  h-[40rem]">
                    {displayedChats.map((chat, i) => (
                        <li className={`text-white text-1xl my-2 p-2 table rounded-md ${chat.from === "me" ? 'bg-[#C83C83] ml-[40vw]' : `bg-[#f472b6] mr[5vw]`}`} key={i}>
                            <span className="font-bold block">{chat.from}</span>
                            <span className="text-sm">{chat.body}</span>
                            {/* <span className="font-bold block">{chat.receptor}</span>  */}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Mensajes;
